import { Suspense } from 'react';
import styles from './admin.module.css';
import AdminPosts from '@/components/admin-posts/admin-posts';
import Loading from '../loading';
import AdminPostsForm from '@/components/admin-posts-form/admin-posts-form';
import AdminUsers from '@/components/admin-users/admin-users';
import AdminUsersForm from '@/components/admin-users-form/admin-users-form';
import { auth } from '@/lib/auth';

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      {/* Post Section */}
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<Loading />}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostsForm userId={session.user?.id} />
        </div>
      </div>

      {/* User Section */}
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<Loading />}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUsersForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
