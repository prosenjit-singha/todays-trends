import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setSubscribed,
} from "../../../../redux/features/subscribe/sub-slice";
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
import { BsCheck2Circle as Tik } from "react-icons/bs";
import { useCallback } from "react";

const Newsletter = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { email, subscribed } = useSelector((state) => state.subscriber);
  const [open, setOpen] = useState(false);
  const inputRef = useRef();
  const subsRef = useRef();
  const subsBtnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  };
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    inputRef.current.blur();
    inputRef.current.disabled = true;
    inputRef.current.style.userSelect = "none";
    inputRef.current.style.pointerEvents = "none";
    inputRef.current.style.color = theme.darkMode
      ? "rgba(255,255,255,0.25)"
      : "rgba(0,0,0,0.25)";
    subsRef.current.disabled = true;
    // subsRef.current.innerText = "Subscribed";
    subsRef.current.style.userSelect = "none";
    subsRef.current.style.pointerEvents = "none";
    setOpen(true);
    dispatch(setEmail(inputRef.current.value));
    dispatch(setSubscribed(true));
  }

  useEffect(() => {
    if (email !== null) {
      inputRef.current.value = email;
      inputRef.current.blur();
      inputRef.current.disabled = true;
      inputRef.current.style.userSelect = "none";
      inputRef.current.style.pointerEvents = "none";
      inputRef.current.style.color = theme.darkMode
        ? "rgba(255,255,255,0.25)"
        : "rgba(0,0,0,0.25)";
      subsRef.current.disabled = true;
      subsRef.current.style.userSelect = "none";
      subsRef.current.style.pointerEvents = "none";
    }
  }, [subscribed]);

  return (
    <Container>
      <ImageContainer>
        <Image src={Subscribe} />
      </ImageContainer>
      <Content>
        <Title>Get The Best Blog Stories into Your inbox!</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            ref={inputRef}
            type="email"
            placeholder="...@example.com"
            required
          />
          <GradientButton
            ref={subsRef}
            color="blue"
            type="submit"
            style={subsBtnStyle}
          >
            {subscribed ? "Subscribed" : "Subscribe"}
            {subscribed && <Tik />}
          </GradientButton>
        </Form>
      </Content>
      <Modal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Newsletter;
