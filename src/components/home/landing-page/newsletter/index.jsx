import React, { useState } from "react";
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
import Modal from "../../../newsletter-modal";
import GradientButton from "../../../button/gradient-button";
import { useCallback } from "react";

const Newsletter = () => {
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    setOpen(true);
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
      <Modal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Newsletter;
