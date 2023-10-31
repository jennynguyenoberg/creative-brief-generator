'use client'
import { useState } from 'react'
import data from './assets/ideasData.json'
import IdeasDisplay from '../components/RightSide'
import ShowIdeasButton from './Button'

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
    <div>
      <div>
        <label htmlFor="industrySelect">Select an Industry:</label>
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
        <label htmlFor="categorySelect">Select a Category:</label>
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

      <ShowIdeasButton onClick={showIdeasOnClick} />

      <IdeasDisplay
        showIdeas={showIdeas}
        selectedIndustry={selectedIndustry}
        tempSelectedCategory={tempSelectedCategory}
        selectedCategoryDeadline={selectedCategoryDeadline}
        currentIdea={currentIdea}
      />
    </div>
  )
}
