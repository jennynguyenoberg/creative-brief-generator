import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <>
      <div className={styles.logo}>
        <h2>Ideaspire</h2>
      </div>
      <div className={styles.menu}>
        <h2>Menu</h2>
      </div>
    </>
  )
}
