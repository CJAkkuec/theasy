import StyledSuggestion from "./StyledSuggestion";
import StyledSuggestionContainer from "./StyledSuggestionContainer";

export const Suggestion = ({ task }) => {
  return (
    <StyledSuggestionContainer>
      <StyledSuggestion>
        <h1>{task[0].title}</h1>
        {task[0].desc}
      </StyledSuggestion>
    </StyledSuggestionContainer>
  );
};
