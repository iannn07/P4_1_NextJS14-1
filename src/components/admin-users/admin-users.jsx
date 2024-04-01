import { getAllUserData } from '@/lib/data';
import styles from './admin-users.module.css';
import Image from 'next/image';
import { IconTrash } from '@tabler/icons-react';
import { deleteUser } from '@/lib/actions';

const AdminUsers = async () => {
  const users = await getAllUserData();

  return (
    <div className={styles.container}>
      <h1>Admin User</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.img || '/noavatar.png'}
              alt=''
              width={50}
              height={50}
            />
            <div className={styles['name-container']}>
              <div className={styles['name-wrapper']}>
                <h5>Name</h5>
                <p className={styles.name}>{user.name}</p>
              </div>
              <div className={styles['name-wrapper']}>
                <h5>Username</h5>
                <p className={styles.name}>{user.username}</p>
              </div>
            </div>
          </div>
          <form action={deleteUser}>
            <input type='hidden' name='id' value={user.id} />
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

export default AdminUsers;
