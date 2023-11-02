import styles from './ideaDisplay.module.css'

export default function IdeasDisplay({
  showIdeas,
  selectedIndustry,
  tempSelectedCategory,
  selectedCategoryDeadline,
  currentIdea,
}) {
  if (showIdeas) {
    return (
      <div className={styles.main}>
        {/* <h2>
          Ideas for {selectedIndustry} - {tempSelectedCategory}
        </h2> */}
        <div className={styles.label}>
          <label>Creative idea</label>
        </div>
        <div className={styles.ideaContainer}>
          <span>You should </span>
          <span className={styles.idea}>{currentIdea}</span>
        </div>
        <span className={styles.deadline}>
          You have
          <p className={styles.circle}>{selectedCategoryDeadline}</p>days to
          finish until the deadline.
        </span>
      </div>
    )
  } else {
    return null
  }
}
