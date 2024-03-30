import styles from './post-card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles['img-container']}>
            <Image src={post.img} alt='' fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>
          {post.createdAt.toString().slice(0, 16)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.description}>{post.description}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
