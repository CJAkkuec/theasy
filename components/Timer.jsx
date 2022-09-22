import { useState } from "react";
import { useTimer } from "react-timer-hook";

import Icon from "@mdi/react";
import { mdiPlay } from "@mdi/js";
import { mdiPause } from "@mdi/js";
import { mdiReload } from "@mdi/js";

import { Dialog } from "./Dialog";

import StyledButton from "./StyledButton";
import StyledButtonContainer from "./StyledButtonContainer";

import StyledTimerContainer from "./StyledTimerContainer";

function Timer({ expiryTimestamp, handleCount }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    autoStart: false,
    expiryTimestamp,
    onExpire: () => handleOpen(),
  });

  const [isPaused, setIsPaused] = useState(false);
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleRestart() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);
    restart(time, false);
  }

  return (
    <StyledTimerContainer>
      <h1>Timer</h1>
      <div>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>

      <StyledButtonContainer>
        <StyledButton
          onClick={() => {
            start();
            setIsPaused(false);
          }}
        >
          <Icon path={mdiPlay} title="Play" size={1} color="grey" />
        </StyledButton>
        <StyledButton
          onClick={() => {
            pause();
            setIsPaused(true);
          }}
          disabled={isRunning ? false : true}
        >
          <Icon
            path={mdiPause}
            title="Pause"
            size={1}
            color={isRunning ? "grey" : "white"}
          />
        </StyledButton>
        <StyledButton
          onClick={() => {
            handleRestart();
            setIsPaused(false);
          }}
        >
          <Icon path={mdiReload} title="Restart" size={1} color="grey" />
        </StyledButton>
      </StyledButtonContainer>
      <p>{isPaused ? "Paused" : ""}</p>

      {open ? (
        <Dialog
          handleOpen={handleOpen}
          handleRestart={handleRestart}
          handleCount={handleCount}
        />
      ) : null}
    </StyledTimerContainer>
  );
}

export default Timer;
