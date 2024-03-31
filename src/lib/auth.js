import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { dbConnection } from './utils';
import { User } from './models';
import bcrypt from 'bcrypt';

const login = async (credentials) => {
  try {
    dbConnection();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error('Incorrect password');
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to login');
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // eslint-disable-next-line no-unused-vars
    async signIn({ user, account, profile }) {
      if (account.provider === 'github') {
        dbConnection();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              name: profile.name,
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
});
