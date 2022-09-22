import styled from "styled-components";

export const Dialog = ({ handleOpen, handleRestart, handleCount }) => {
  return (
    <>
      <StyledDialogContainer>
        <p>You did it! 🥳</p>

        <p>Here's a cookie!</p>
        <button
          onClick={() => {
            handleOpen();
            handleRestart();
            handleCount();
          }}
        >
          🍪
        </button>
      </StyledDialogContainer>
      <StyledBackDrop></StyledBackDrop>
    </>
  );
};

const StyledDialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: calc(50vh - 100px);
  left: calc(50vw - 150px);
  z-index: 21;
  width: 300px;
  height: 200px;
  background-color: white;
`;

const StyledBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
