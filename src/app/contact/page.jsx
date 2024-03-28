import styles from './contact.module.css';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['img-container']}>
        <Image src={'/contact.png'} alt='Contact' fill className={styles.img} />
      </div>
      <div className={styles['form-container']}>
        <form action='' className={styles.form}>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email Address' />
          <input type='text' placeholder='Phone Number' />
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='Message'
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
