import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 10rem;
  font-family: "Brush Script MT";
  text-shadow: 3px 3px 0px var(--primary);
  color: var(--secondary);
  text-align: center;

  & > p {
    font-family: Monaco, "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 1.3rem;
    text-shadow: none;
    color: var(--primary);
  }
`;

export default StyledHeader;
