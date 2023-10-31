export default function IdeasDisplay({
  showIdeas,
  selectedIndustry,
  tempSelectedCategory,
  selectedCategoryDeadline,
  currentIdea,
}) {
  if (showIdeas) {
    return (
      <div>
        <h2>
          Ideas for {selectedIndustry} - {tempSelectedCategory}
        </h2>
        <p>Deadline: {selectedCategoryDeadline}</p>
        <p>Idea: {currentIdea}</p>
      </div>
    )
  } else {
    return null
  }
}
