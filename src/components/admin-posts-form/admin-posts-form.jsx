'use client';

import { createPost } from '@/lib/actions';
import styles from './admin-posts-form.module.css';
import { useFormState } from 'react-dom';
import { IconAlertTriangle } from '@tabler/icons-react';

const AdminPostsForm = ({ userId }) => {
  const [state, formAction] = useFormState(createPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type='hidden' name='userId' value={userId} />
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='slug' placeholder='Slug' />
      <input type='text' name='img' placeholder='Image' />
      <textarea
        type='text'
        name='description'
        placeholder='Description'
        rows={10}
      />
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

export default AdminPostsForm;
