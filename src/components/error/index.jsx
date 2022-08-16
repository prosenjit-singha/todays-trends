import React from "react";

import {
  Container,
  Section,
  ErrorContainer,
  Error as ERR,
  Code,
  Text,
} from "./styles";

const Error = () => {
  return (
    <Container>
      <Section>
        <ErrorContainer>
          <Code>404</Code>
          <ERR>ERROR</ERR>
        </ErrorContainer>
        <Text>This is not the web page you are looking for.</Text>
      </Section>
    </Container>
  );
};

export default Error;
