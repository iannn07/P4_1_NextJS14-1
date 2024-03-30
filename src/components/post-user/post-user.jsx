import { getUserData } from '@/lib/data';
import styles from './post-user.module.css';
import Image from 'next/image';

const PostUser = async ({ userId }) => {
  const user = await getUserData(userId);

  return (
    <>
      <Image
        src={user.img ? user.img : '/noavatar.png'}
        alt=''
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </>
  );
};

export default PostUser;
