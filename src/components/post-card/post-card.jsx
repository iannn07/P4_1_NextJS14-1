import styles from './post-card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
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
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h3 className={styles.title}>Gausspy</h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum
          ac nibh id lobortis. Etiam vehicula efficitur tortor, quis condimentum
          metus gravida eget. Suspendisse placerat, justo eu fermentum gravida,
          nisi enim scelerisque felis, sollicitudin tempor lectus leo sit amet
          velit. Phasellus porttitor aliquam tortor, non maximus augue rhoncus
          ut.
        </p>
        <Link href={'/blog/post'} className={styles.link}>READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
