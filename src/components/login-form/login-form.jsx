'use client';

import { handleCredentialLogin } from '@/lib/actions';
import styles from './login-form.module.css';
import { useFormState } from 'react-dom';
import Link from 'next/link';

const LoginForm = () => {
  const [state, formAction] = useFormState(handleCredentialLogin, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <input type='text' placeholder='Username' name='username' />
      <input type='password' placeholder='Password' name='password' />
      <button>Login</button>
      {<div className={styles.error}>{state?.error}</div>}
      <Link href={'/register'}>
        {`Don't have an account?`} <b>Register Here</b>
      </Link>
    </form>
  );
};

export default LoginForm;
