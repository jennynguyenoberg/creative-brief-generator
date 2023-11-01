import styles from './Button.module.css'
export default function Button({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Generate brief
    </button>
  )
}
