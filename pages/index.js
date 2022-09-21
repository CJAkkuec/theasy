import Head from "next/head";
import StyledContainer from "../components/StyledContainer";
import StyledCard from "../components/StyledCard";

export default function Home() {
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
      <StyledContainer>
        <StyledCard>Implement timer with random suggestions</StyledCard>
      </StyledContainer>
    </>
  );
}
