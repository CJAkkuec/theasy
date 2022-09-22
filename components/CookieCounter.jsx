import styled, { css } from "styled-components";

export const CookieCounter = ({ cookieCount }) => {
  return (
    <>
      <StyledGrid>
        <StyledCookie>🍪</StyledCookie>
        <StyledCount countActive={cookieCount === 0 ? "false" : "true"}>
          {cookieCount}
        </StyledCount>
      </StyledGrid>
      <StyledFlex>
        <StyledText>Offline Cookie Exchange Rate</StyledText>
        <StyledText>1:1</StyledText>
      </StyledFlex>
    </>
  );
};

const StyledCount = styled.div`
  font-size: 3rem;
  line-height: 3rem;
  font-family: "Brush Script MT";
  text-shadow: 2px 2px 2px #000000;
  grid-area: box;

  ${({ countActive = "true" }) =>
    countActive === "true" &&
    css`
      color: white;
    `}

  ${({ countActive = "false" }) =>
    countActive === "false" &&
    css`
      color: var(--error);
    `}
`;

const StyledCookie = styled.div`
  font-size: 5rem;
  line-height: 5rem;
  grid-area: box;
`;

const StyledGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-areas: "box";
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled.p``;
