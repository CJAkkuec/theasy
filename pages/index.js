import Head from "next/head";
import { useState } from "react";
import { CookieCounter } from "../components/CookieCounter";
import StyledContainer from "../components/StyledContainer";
import StyledHeader from "../components/StyledHeader";
import StyledSuggestion from "../components/StyledSuggestion";
import StyledTimerContainer from "../components/StyledTimerContainer";
import StyledButton from "../components/StyledButton";
import StyledDisplay from "../components/StyledDisplay";
import Timer from "../components/Timer";

import tasks from "../data/tasks.json";
import { Suggestion } from "../components/Suggestion";

import { motion } from "framer-motion";
import { useLocalStorage } from "../utils/useLocalStorage";
import { Warning } from "../components/Warning";

export default function Home() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  const [cookieCount, setCookieCount] = useLocalStorage("cookieCount", 0);
  const [task, setTask] = useState(null);
  const [visible, setVisible] = useState(false);
  const [warning, setWarning] = useState(false);
  const [flag, setFlag] = useState(false);

  function handleCount() {
    setCookieCount(cookieCount + 1);
  }

  function getTask() {
    const randomIndex = Math.floor(Math.random() * 8) + 1;
    const randomTask = tasks.filter((task) => task.index === randomIndex);
    setTask(randomTask);
    console.log(randomTask);
  }

  function handleCookieReset() {
    setCookieCount(0);
  }

  function handleWarning() {
    setWarning(!warning);
  }

  return (
    <>
      <Head>
        <title>Theasy</title>
        <meta name="description" content="Made by CJ" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✏️</text></svg>"
        />
      </Head>
      <StyledHeader>
        Theasy<p>... putting the easy in thesis</p>
      </StyledHeader>
      <StyledContainer>
        {flag ? null : (
          <>
            <p>Need a place to start?</p>
            <StyledButton
              variant="get"
              onClick={() => {
                setFlag(true);
              }}
            >
              Start
            </StyledButton>
          </>
        )}
        <StyledDisplay visible={flag ? true : false}>
          <StyledButton
            variant="get"
            onClick={() => {
              getTask();
            }}
          >
            Pick A Task
          </StyledButton>
          {task !== null ? (
            <motion.div animate={{ x: 0 }} initial={{ x: -1000 }}>
              <Suggestion task={task} />
            </motion.div>
          ) : null}
          <StyledButton
            variant="get"
            onClick={() => {
              setVisible(true);
            }}
          >
            10 Minute Timer
          </StyledButton>
          {visible ? (
            <motion.div animate={{ x: 0 }} initial={{ x: -1000 }}>
              <Timer expiryTimestamp={time} handleCount={handleCount} />
            </motion.div>
          ) : null}
          <CookieCounter cookieCount={cookieCount} />
          <StyledButton
            variant="warning"
            onClick={() => {
              handleWarning();
            }}
          >
            Cookie Reset
          </StyledButton>
          {warning ? (
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -1000 }}
              whileHover={{ scale: 1.1 }}
            >
              <Warning
                handleCookieReset={handleCookieReset}
                handleWarning={handleWarning}
              />
            </motion.div>
          ) : null}
        </StyledDisplay>
      </StyledContainer>
    </>
  );
}
