'use client'
import { useState } from 'react'
import data from './assets/ideasData.json'
import IdeasDisplay from './IdeaDisplay/IdeasDisplay'
import Button from '../components/Button/Button'
import styles from './styles.module.css'
import stylesFooter from '../components/Footer/footer.module.css'
import stylesNavbar from '../components/Navbar/navbar.module.css'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Image from 'next/image'

export default function CreativeIdeas() {
  const [isButtonClicked, setIsButtonClicked] = useState(false)
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
    setIsButtonClicked(true)
  }

  return (
    <main className={styles.main}>
      <div className={styles.illustrationLeft}>
      <Image
          src="/paper-plane.svg"
          alt="Paper plane trail illustration"
          width={830}
          height={830}
        />
        </div>

      <nav className={stylesNavbar.nav}>
        <Navbar />
      </nav>
      <div className={styles.hero}>
       
        {/* LEFT SIDE */}
        <div className={styles.leftContainer}>
          <div>
            <h1>Running out of creative juice?</h1>
            <h3 className={styles.tagline}>Say no more!</h3>
          </div>
          <div className={styles.choices}>
            <div>
              <label className={styles.category} htmlFor="industrySelect">
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
              <label className={styles.category} htmlFor="categorySelect">
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

        {/* RIGHT SIDE */}
        <div className={styles.rightContainer}>
          <IdeasDisplay
            showIdeas={showIdeas}
            selectedIndustry={selectedIndustry}
            tempSelectedCategory={tempSelectedCategory}
            selectedCategoryDeadline={selectedCategoryDeadline}
            currentIdea={currentIdea}
          />
          {isButtonClicked ? null : (
            <span className={styles.introText}>
              Generate a unique design concept. Simply choose the job type and
              industry that interest you, then click {'"'}Generate.{'"'}
            </span>
          )}
          <div
            className={`${styles.btn} ${isButtonClicked ? styles.clicked : ''}`}
          >
            <Button onClick={showIdeasOnClick} />
          </div>
        <div className={styles.illustrationRight}>
        <Image
          src="/paper-plane-reverse.svg"
          alt="Paper plane trail illustration"
          width={350}
          height={350}
        />
        </div>
        </div>
      </div>
      <footer className={stylesFooter.footer}>
        <Footer />
      </footer>
    </main>
  )
}
