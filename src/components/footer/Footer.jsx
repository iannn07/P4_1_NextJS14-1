import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logo}>
        Gausspy
      </Link>
      <div className={styles.text}>
        Gausspy &#169; All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
