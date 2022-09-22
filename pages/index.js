import Head from "next/head";
import { useState } from "react";
import { CookieCounter } from "../components/CookieCounter";
import StyledContainer from "../components/StyledContainer";
import StyledHeader from "../components/StyledHeader";
import StyledSuggestion from "../components/StyledSuggestion";
import StyledTimerContainer from "../components/StyledTimerContainer";
import StyledButton from "../components/StyledButton";
import Timer from "../components/Timer";

import tasks from "../data/tasks.json";
import { Suggestion } from "../components/Suggestion";

import { motion } from "framer-motion";

export default function Home() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  const [cookieCount, setCookieCount] = useState(0);
  const [task, setTask] = useState(null);
  const [visible, setVisible] = useState(false);

  function handleCount() {
    setCookieCount(cookieCount + 1);
  }

  function getTask() {
    const randomIndex = Math.floor(Math.random() * 8) + 1;
    const randomTask = tasks.filter((task) => task.index === randomIndex);
    setTask(randomTask);
    console.log(randomTask);
  }

  function getTimer() {}

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
        <StyledButton
          variant="get"
          onClick={() => {
            getTask();
          }}
        >
          Get Task
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
          Get Timer
        </StyledButton>
        {visible ? (
          <motion.div animate={{ x: 0 }} initial={{ x: -1000 }}>
            <Timer expiryTimestamp={time} handleCount={handleCount} />
          </motion.div>
        ) : null}
        <CookieCounter cookieCount={cookieCount} />
      </StyledContainer>
    </>
  );
}
