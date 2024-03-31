import Image from 'next/image';
import styles from './about.module.css';

export const metadata = {
  title: 'About',
  description: 'NextJS 14 - About',
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['text-container']}>
        <h2 className={styles.subtitle}>About Gausspy</h2>
        <h1 className={styles.title}>Either peace or war</h1>
        <p className={styles.description}>
          Clan Gunn is a Highland Scottish clan associated with lands in
          northeastern Scotland, including Caithness, Sutherland and, arguably,
          the Orkney Isles. Clan Gunn is one of the oldest Scottish Clans, being
          descended from the Norse Jarls of Orkney and the Pictish Mormaers of
          Caithness.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Members</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Members</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Members</p>
          </div>
        </div>
      </div>
      <div className={styles['img-container']}>
        <Image src={'/about.png'} alt='About' fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
