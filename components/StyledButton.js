import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 10px 20px;
  width: 100%;
  cursor: pointer;

  ${({ variant = "default" }) =>
    variant === "default" &&
    css`
      color: white;
      background-color: var(--secondary);

      &:hover {
        background-color: var(--tertiary);
      }
    `}

  ${({ variant }) =>
    variant === "get" &&
    css`
      font-size: 1.3rem;
      color: white;
      width: fit-content;
      background-color: var(--primary);
      box-shadow: 3px 3px 0px var(--secondary);

      &:hover {
        background-color: var(--tertiary);
      }
    `}

  ${({ variant }) =>
    variant === "warning" &&
    css`
      color: white;
      background-color: var(--warning);

      &:hover {
        background-color: var(--warning-light);
      }
    `}

    ${({ variant }) =>
    variant === "error" &&
    css`
      color: white;
      background-color: var(--error);

      &:hover {
        background-color: var(--error-light);
      }
    `}
`;

export default StyledButton;
