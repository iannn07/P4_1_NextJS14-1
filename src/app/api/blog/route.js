import { Post } from '@/lib/models';
import { dbConnection } from '@/lib/utils';

export const GET = async () => {
  try {
    dbConnection();
    const posts = await Post.find();

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Failed to fetch data', { status: 500 });
  }
};
