import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <>
      <div className={styles.logo}>
        <div className={`${styles.social} custom-link`}>
          <Link href={'/'} rel="noopener noreferrer">
            <h2>Ideaspire</h2>
          </Link>
        </div>
      </div>
      <div className={styles.menu}>
        <h2>Menu</h2>
      </div>
    </>
  )
}
