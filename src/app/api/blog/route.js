import { Post } from '@/lib/models';
import { dbConnection } from '@/lib/utils';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    dbConnection();
    const posts = await Post.find();

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data', { status: 500 });
  }
};
