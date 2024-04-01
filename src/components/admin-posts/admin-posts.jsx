import { getPosts } from '@/lib/data';
import styles from './admin-posts.module.css';
import Image from 'next/image';
import { deletePost } from '@/lib/actions';
import { IconTrash } from '@tabler/icons-react';

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Admin Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || '/noavatar.png'}
              alt=''
              width={50}
              height={50}
            />
            <span className={styles.title}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type='hidden' name='id' value={post.id} />
            <button className={styles['btn-delete']}>
              <div className={styles['btn-container']}>
                <div>
                  <IconTrash size={24} />
                </div>
                <div>Delete</div>
              </div>
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
