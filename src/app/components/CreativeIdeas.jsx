'use client'
import { useState } from 'react'
import data from './assets/ideasData.json'
import IdeasDisplay from './IdeasDisplay'
import Button from './Button'
import styles from './styles.module.css'

export default function CreativeIdeas() {
  const [selectedIndustry, setSelectedIndustry] = useState('Technology')
  const [selectedCategory, setSelectedCategory] = useState(
    data.industries.Technology[0].category,
  )
  const [tempSelectedIndustry, setTempSelectedIndustry] = useState('Technology')
  const [tempSelectedCategory, setTempSelectedCategory] = useState(
    data.industries.Technology[0].category,
  )
  const [currentIdea, setCurrentIdea] = useState('')
  const [selectedCategoryDeadline, setSelectedCategoryDeadline] = useState('')
  const [showIdeas, setShowIdeas] = useState(false)

  const handleIndustryChange = (event) => {
    setTempSelectedIndustry(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setTempSelectedCategory(event.target.value)
  }

  const showIdeasOnClick = () => {
    setSelectedIndustry(tempSelectedIndustry)
    setSelectedCategory(tempSelectedCategory)

    const selectedIndustryData = data.industries[tempSelectedIndustry]
    let ideas = []
    let categoryDeadline = ''
    let selectedCategoryData = null

    if (selectedIndustryData) {
      selectedCategoryData = selectedIndustryData.find(
        (item) => item.category === tempSelectedCategory,
      )
      if (selectedCategoryData) {
        ideas = selectedCategoryData.ideas
        categoryDeadline = selectedCategoryData.deadline
      }
    }

    setSelectedCategoryDeadline(categoryDeadline)

    if (selectedCategoryData && ideas.length > 0) {
      const randomIndex = Math.floor(Math.random() * ideas.length)
      setCurrentIdea(ideas[randomIndex])
    }

    setShowIdeas(true)
  }

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <h2>Ideaspire</h2>
        </div>
        <div className={styles.menu}>
          <h2>Menu</h2>
        </div>
      </nav>

      <div className={styles.hero}>
        {/* RIGHT SIDE */}
        <div className={styles.leftContainer}>
          <div>
            <h1>Running out of creative juice?</h1>
            <h3 className={styles.tagline}>Say no more!</h3>
          </div>
          <div className={styles.choices}>
            <div>
              <label className={styles.label} htmlFor="industrySelect">
                Industry
              </label>
              <select
                id="industrySelect"
                value={tempSelectedIndustry}
                onChange={handleIndustryChange}
              >
                {Object.keys(data.industries).map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={styles.label} htmlFor="categorySelect">
                Category
              </label>
              <select
                id="categorySelect"
                value={tempSelectedCategory}
                onChange={handleCategoryChange}
              >
                {data.industries[tempSelectedIndustry].map((item) => (
                  <option key={item.category} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* LEFT SIDE */}
        <div className={styles.rightContainer}>
          <IdeasDisplay
            showIdeas={showIdeas}
            selectedIndustry={selectedIndustry}
            tempSelectedCategory={tempSelectedCategory}
            selectedCategoryDeadline={selectedCategoryDeadline}
            currentIdea={currentIdea}
          />
          <Button onClick={showIdeasOnClick} />
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.leftColumn}>
          <div>
            <h2>Ideaspire</h2>
            <span className={styles.footerCopy}>
              Fueling Your Creative Juice
            </span>
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
            <input
              id="subscribe"
              placeholder="Type your email"
              disabled={true}
            />
            <button>Subscribe</button>
          </div>
        </div>
      </footer>
    </main>
  )
}
