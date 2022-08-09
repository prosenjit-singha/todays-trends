import React from "react";
import Subscribe from "../../../../img/subscribe-img-2.png";
import {
  Container,
  ImageContainer,
  Image,
  Content,
  Title,
  Form,
  Input,
} from "./styles";
import GradientButton from "../../../button/gradient-button";

const Newsletter = () => {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Successfully subscribed!");
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={Subscribe} />
      </ImageContainer>
      <Content>
        <Title>Get The Best Blog Stories into Your inbox!</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="email" placeholder="...@example.com" required />
          <GradientButton color="blue" type="submit">
            Subscribe
          </GradientButton>
        </Form>
      </Content>
    </Container>
  );
};

export default Newsletter;
