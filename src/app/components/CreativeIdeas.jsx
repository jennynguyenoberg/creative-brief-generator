'use client'
import { useState } from 'react'
import data from './assets/ideasData.json'

export default function CreativeIdeas() {
  const industryOptions = Object.keys(data.industries)
  const [selectedIndustry, setSelectedIndustry] = useState('Technology')
  const categoriesForSelectedIndustry = data.industries[selectedIndustry]

  return (
    <div>
      <div>
        <label htmlFor="industrySelect">Select an Industry:</label>
        <select id="industrySelect" value="Technology">
          {industryOptions.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="categorySelect">Select a Category:</label>
        <select id="categorySelect" value="Logo Design">
          {categoriesForSelectedIndustry.map((category) => (
            <option key={category.category} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button>Show Ideas</button>
      </div>
    </div>
  )
}
