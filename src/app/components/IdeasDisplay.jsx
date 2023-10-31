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
        {/* <h2>
          Ideas for {selectedIndustry} - {tempSelectedCategory}
        </h2> */}
        <span>You should</span>
        <p>{currentIdea}</p>
        <span>
          You have {selectedCategoryDeadline} days to finish until the deadline.
        </span>
      </div>
    );
  } else {
    return null;
  }
}
