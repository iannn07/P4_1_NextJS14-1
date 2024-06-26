import PostCard from '@/components/post-card/post-card';
import styles from './blog.module.css';
// import { getPosts } from '@/lib/data';

export const metadata = {
  title: 'Blog',
  description: 'NextJS 14 - About',
};

const getPosts = async () => {
  const res = await fetch('http://localhost:3000/api/blog', {
    next: { revalidate: 3600 },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
