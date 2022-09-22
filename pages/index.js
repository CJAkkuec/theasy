import Head from "next/head";
import { useState } from "react";
import { CookieCounter } from "../components/CookieCounter";
import StyledContainer from "../components/StyledContainer";
import StyledHeader from "../components/StyledHeader";
import StyledTimerContainer from "../components/StyledTimerContainer";
import Timer from "../components/Timer";

export default function Home() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  const [cookieCount, setCookieCount] = useState(0);

  function handleCount() {
    setCookieCount(cookieCount + 1);
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
        <StyledTimerContainer>
          <Timer expiryTimestamp={time} handleCount={handleCount} />
        </StyledTimerContainer>
        <CookieCounter cookieCount={cookieCount} />
      </StyledContainer>
    </>
  );
}
