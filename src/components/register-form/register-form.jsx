'use client';

import { register } from '@/lib/actions';
import styles from './register-form.module.css';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IconAlertTriangle } from '@tabler/icons-react';

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type='text' placeholder='Name' name='name' />
      <input type='text' placeholder='Username' name='username' />
      <input type='email' placeholder='Email' name='email' />
      <input type='password' placeholder='Password' name='password' />
      <input
        type='password'
        placeholder='Confirm Password'
        name='confirmPassword'
      />
      <button>Register</button>
      {state?.error && (
        <div className={styles.error}>
          <IconAlertTriangle size={24} />
          {state?.error}
          <IconAlertTriangle size={24} />
        </div>
      )}
      <Link href={'/login'}>
        Already have an account? <b>Login Here</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
