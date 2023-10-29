'use client'
import { useState } from 'react'
import data from './assets/ideasData.json'

export default function CreativeIdeas() {
  const industryOptions = Object.keys(data.industries)
  const [selectedIndustry, setSelectedIndustry] = useState('Technology')
  const [selectedCategory, setSelectedCategory] = useState(
    data.industries.Technology[0].category,
  )
  const [showIdeas, setShowIdeas] = useState(false)
  const [tempSelectedIndustry, setTempSelectedIndustry] = useState('Technology')
  const [tempSelectedCategory, setTempSelectedCategory] = useState(
    data.industries.Technology[0].category,
  )
  const [currentIdea, setCurrentIdea] = useState('')
  const [selectedCategoryDeadline, setSelectedCategoryDeadline] = useState('')

  const handleIndustryChange = (event) => {
    setTempSelectedIndustry(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setTempSelectedCategory(event.target.value)
  }

  const showIdeasOnClick = () => {
    setSelectedIndustry(tempSelectedIndustry)
    setSelectedCategory(tempSelectedCategory)

    const selectedIndustryData = data.industries[tempSelectedIndustry] // Use tempSelectedIndustry
    let ideas = []
    let categoryDeadline = ''
    let selectedCategoryData = null

    if (selectedIndustryData) {
      selectedCategoryData = selectedIndustryData.find(
        (item) => item.category === tempSelectedCategory, // Use tempSelectedCategory
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
        <label htmlFor='industrySelect'>Select an Industry:</label>
        <select
          id='industrySelect'
          value={tempSelectedIndustry}
          onChange={handleIndustryChange}
        >
          {industryOptions.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor='categorySelect'>Select a Category:</label>
        <select
          id='categorySelect'
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

      <div>
        <button onClick={showIdeasOnClick}>Show Ideas</button>
      </div>

      {showIdeas && (
        <div>
          <h2>
            Ideas for {selectedIndustry} - {tempSelectedCategory}{' '}
          </h2>
          <p>Deadline: {selectedCategoryDeadline}</p>
          <p>Idea: {currentIdea}</p>
        </div>
      )}
    </div>
  )
}
