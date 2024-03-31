import { handleGithubLogin, handleCredentialLogin } from '@/lib/actions';
import styles from './login.module.css';

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button type='submit' className={styles.github}>
            Login with GitHub
          </button>
        </form>
        <form className={styles.form} action={handleCredentialLogin}>
          <input type='text' placeholder='Username' name='username' />
          <input type='password' placeholder='Password' name='password' />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
