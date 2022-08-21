import React from "react";
import { Container } from "../../styles/containers";

import LandingPage from "./landing-page";

const Home = () => {
  return (
    <>
      <Container>
        <LandingPage />
      </Container>
    </>
  );
};

export default React.memo(Home);
