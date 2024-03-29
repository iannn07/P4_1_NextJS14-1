import styles from './post.module.css';
import Image from 'next/image';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['img-container']}>
        <Image
          src={
            'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
          alt=''
          fill
          className={styles.img}
        />
      </div>
      <div className={styles['text-container']}>
        <h1 className={styles.title}>Gausspy</h1>
        <div className={styles.detail}>
          <Image
            src={
              'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
            alt=''
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles['detail-text']}>
            <span className={styles['detail-title']}>Author</span>
            <span className={styles['detail-value']}>Gausspy</span>
          </div>
          <div className={styles['detail-text']}>
            <span className={styles['detail-title']}>Published</span>
            <span className={styles['detail-value']}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            condimentum est non lectus dictum rhoncus. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Etiam convallis erat sed varius sodales. Nunc libero nisi,
            tempus sit amet enim sed, elementum viverra mauris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
