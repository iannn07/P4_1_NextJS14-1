'use client';

import styles from './admin-users-form.module.css';
import { useFormState } from 'react-dom';
import { IconAlertTriangle } from '@tabler/icons-react';
import { createUser } from '@/lib/actions';

const AdminUsersForm = () => {
  const [state, formAction] = useFormState(createUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type='text' name='name' placeholder='Name' />
      <input type='text' name='username' placeholder='Username' />
      <input type='email' name='email' placeholder='Email' />
      <input type='password' name='password' placeholder='Password' />
      <input type='text' name='img' placeholder='Image' />
      <select name='isAdmin'>
        <option value='false'>Is Admin?</option>
        <option value='false'>No</option>
        <option value='true'>Yes</option>
      </select>
      <button>Add</button>
      {state?.error && (
        <div className={styles.error}>
          <IconAlertTriangle size={24} />
          {state?.error}
          <IconAlertTriangle size={24} />
        </div>
      )}
    </form>
  );
};

export default AdminUsersForm;
