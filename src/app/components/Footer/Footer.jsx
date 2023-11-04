import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <>
      <div className={styles.leftColumn}>
        <div>
          <h2>Ideaspire</h2>
          <span className={styles.footerCopy}>Fueling Your Creative Juice</span>
        </div>
        <div className={`${styles.social} custom-link`}>
          Design and Development by{' '}
          <Link
            href={'https://www.jennynguyenoberg.com/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Jenny Nguyen Öberg
          </Link>{' '}
          © 2023 All rights reserved
        </div>
      </div>
      <div className={styles.midddleColumn}>
        <h2>Social</h2>
        <div className={`${styles.social} custom-link`}>
          <ul className={styles.social}>
            <li>
              <Link
                href={'https://www.linkedin.com/in/jennynguyenoberg'}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href={'https://www.instagram.com/jennynguyenoberg/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href={'https://github.com/jennynguyenoberg'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href={'https://www.behance.net/jennynguyenoberg'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </Link>
            </li>
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
