import { register } from '@/lib/actions';
import styles from './register.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={register} className={styles.form}>
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
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
