import { handleGithubLogin } from '@/lib/actions';
import styles from './login.module.css';
import LoginForm from '@/components/login-form/login-form';
import { IconBrandGithub } from '@tabler/icons-react';

const LoginPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button type='submit' className={styles.github}>
            <div className={styles['btn-container']}>
              <div className={styles['btn-item']}>
                <IconBrandGithub size={24} />
              </div>
              <div className={styles['btn-item']}>Login with GitHub</div>
            </div>
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
