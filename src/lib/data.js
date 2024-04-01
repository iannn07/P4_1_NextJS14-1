import { Post, User } from './models';
import { dbConnection } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export const getPosts = async () => {
  noStore();
  try {
    dbConnection();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
};

export const getPostsData = async (slug) => {
  noStore();
  try {
    dbConnection();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
};

export const getUserData = async (userId) => {
  noStore();
  try {
    dbConnection();
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
};

export const getAllUserData = async () => {
  try {
    dbConnection();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
};
