'use server';

import { signIn, signOut } from '@/lib/auth';
import { dbConnection } from './utils';
import { Post, User } from './models';
import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';

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

export const createPost = async (previousState, formData) => {
  const { title, description, slug, userId, img } =
    Object.fromEntries(formData);

  try {
    dbConnection();

    const newPost = new Post({
      title,
      description,
      slug,
      userId,
      img,
    });

    await newPost.save();
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    return { error: 'Failed to create post' };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    dbConnection();

    await Post.findByIdAndDelete(id);
    console.log('Post deleted successfully');
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to delete post');
  }
};

export const createUser = async (previousState, formData) => {
  const { name, username, email, img, password } = Object.fromEntries(formData);

  try {
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
    console.log('User created successfully');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    return { error: 'Failed to create user' };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    dbConnection();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log('User deleted successfully');
    revalidatePath('/admin');
  } catch (error) {
    console.log(error);
    throw new Error('Failed to delete user');
  }
};
