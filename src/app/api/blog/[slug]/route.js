import { Post } from '@/lib/models';
import { dbConnection } from '@/lib/utils';

export const GET = async (request, { params }) => {
  const slug = params.slug;

  try {
    dbConnection();
    const post = await Post.findOne({ slug });

    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data', { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const slug = params.slug;

  try {
    dbConnection();
    await Post.deleteOne({ slug });

    return new Response(JSON.stringify("Deleted"), { status: 200 });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to delete data', { status: 500 });
  }
};
