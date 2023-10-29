export default function CreativeIdeas() {
  return (
    <div>
      <div>
        <label htmlFor="industrySelect">Select an Industry:</label>
        <select id="industrySelect" value="Technology">
          <option value="Technology">Technology</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Sports">Sports</option>
          <option value="Education">Education</option>
          <option value="Travel">Travel</option>
          <option value="Random">Random</option>
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
