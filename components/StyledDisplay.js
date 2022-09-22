import styled, { css } from "styled-components";

const StyledDisplay = styled.div`
  display: none;

  ${({ visible }) =>
    visible === true &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    `}
`;

export default StyledDisplay;
