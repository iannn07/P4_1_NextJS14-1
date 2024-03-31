import PostUser from '@/components/post-user/post-user';
import styles from './post.module.css';
import Image from 'next/image';
import { Suspense } from 'react';
// import { getPostsData } from '@/lib/data';

const getPostsData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    next: { revalidate: 3600 },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const slug = params.slug;
  const post = await getPostsData(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const slug = params.slug;
  const post = await getPostsData(slug);

  return (
    <div className={styles.container}>
      <div className={styles['img-container']}>
        <Image src={post.img} alt='' fill className={styles.img} />
      </div>
      <div className={styles['text-container']}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles['detail-text']}>
            <span className={styles['detail-title']}>Published</span>
            <span className={styles['detail-value']}>
              {post.createdAt.toString().slice(0, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.description}>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
