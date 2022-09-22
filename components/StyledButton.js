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
    variant === "save" &&
    css`
      color: white;
      background-color: var(--tertiary);

      &:hover {
        background-color: var(--tertiary-light);
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
