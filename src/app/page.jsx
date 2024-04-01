import styles from './home.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles['text-container']}>
        <h1 className={styles.title}>
          AUT PAX <br />
          AUT BELLUM
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          condimentum est non lectus dictum rhoncus. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Etiam convallis erat sed varius sodales. Nunc libero nisi, tempus sit
          amet enim sed, elementum viverra mauris.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <Link href={'/contact'}>
            <button className={styles['contact-button']}>Contact</button>
          </Link>
        </div>
        <div className={styles.brands}>
          <Image
            src={'/brands.png'}
            alt=''
            fill
            className={styles['brand-img']}
          />
        </div>
      </div>
      <div className={styles['img-container']}>
        <Image src={'/hero.gif'} alt='' fill className={styles['home-img']} />
      </div>
    </div>
  );
};

export default Home;
