import styled from "styled-components";
import { motion } from "framer-motion";

export const Dialog = ({ handleOpen, handleRestart, handleCount }) => {
  return (
    <>
      <StyledDialogContainer>
        <p>You did it! 🥳</p>

        <p>Here&apos;s a cookie!</p>
        <CookieButton
          onClick={() => {
            handleOpen();
            handleRestart();
            handleCount();
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          🍪
        </CookieButton>
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

const CookieButton = styled(motion.button)`
  border: none;
  outline: none;
  background: transparent;
  font-size: 4rem;
`;
