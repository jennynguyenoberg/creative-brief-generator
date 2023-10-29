import data from './assets/ideasData.json'

export default function CreativeIdeas() {
  const industryOptions = Object.keys(data.industries);
  
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
        <select id="categorySelect" value="Technology">
          <option value="Logo Design">Logo Design</option>
          <option value="Website">Website</option>
          <option value="Brand Identity">Brand Identity</option>
          <option value="Illustration">Illustration</option>
        </select>
      </div>
      <div>
        <button>Show Ideas</button>
      </div>
    </div>
  );
}
