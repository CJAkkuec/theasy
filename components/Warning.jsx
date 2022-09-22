import styled from "styled-components";
import StyledButton from "./StyledButton";

export const Warning = ({ handleCookieReset, handleWarning }) => {
  return (
    <StyledBoxContainer>
      <p>Are you sure?</p>
      <StyledBox>
        <StyledButton
          onClick={() => {
            handleCookieReset();
            handleWarning();
          }}
        >
          Yes
        </StyledButton>
        <StyledButton
          onClick={() => {
            handleWarning();
          }}
        >
          No
        </StyledButton>
      </StyledBox>
    </StyledBoxContainer>
  );
};

const StyledBox = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid var(--primary);
  border-radius: 10px;
`;
