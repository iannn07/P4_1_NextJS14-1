'use server';

import { signIn, signOut } from '@/lib/auth';
import { dbConnection } from './utils';
import { User } from './models';
import bcrypt from 'bcrypt';

export const handleGithubLogin = async () => {
  await signIn('github');
};

export const register = async (previousState, formData) => {
  const { name, username, email, img, password, confirmPassword } =
    Object.fromEntries(formData);

  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' };
  }

  try {
    dbConnection();
    const user = await User.findOne({ username });

    if (user) {
      return { error: 'Username already exists' };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log('User registered successfully');

    return { success: true };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to register');
  }
};

export const handleCredentialLogin = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn('credentials', { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes('CredentialsSignin')) {
      return { error: 'Invalid username or password' };
    }
    throw error;
  }
};

export const handleLogout = async () => {
  await signOut();
};
