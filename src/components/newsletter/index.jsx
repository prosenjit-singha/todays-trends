import React from "react";
import { Container, Header, Text, TextBox, Span } from "./styles.js";
import Button from "../button/Button.js";

const Newsletter = () => {
  return (
    <Container>
      <Header>
        Subscribe to our <Span>newsletter</Span>
      </Header>
      <Text>No spam, notifications only about new products, updates.</Text>
      <TextBox type="email" placeholder="enter your email here" />
      <Button fontSize={1.5} borderRadius={0.4}>
        Subscribe
      </Button>
    </Container>
  );
};

export default Newsletter;
