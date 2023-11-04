import styles from './footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={styles.leftColumn}>
        <div>
          <h2>Ideaspire</h2>
          <span className={styles.footerCopy}>Fueling Your Creative Juice</span>
        </div>
        <div>
          Design and Development by Jenny Nguyen Öberg © 2023 All rights
          reserved
        </div>
      </div>
      <div className={styles.midddleColumn}>
        <h2>Social</h2>
        <div>
          <ul className={styles.social}>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Dribbble</li>
            <li>Behance</li>
          </ul>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div>
          <h2>Newsletter</h2>
          <span className={styles.footerCopy}>
            Be up to date with new ideas
          </span>
        </div>
        <div className={styles.input}>
          <input id="subscribe" placeholder="Type your email" disabled={true} />
          <button>Subscribe</button>
        </div>
      </div>
    </>
  )
}
