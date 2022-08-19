import React, { useState, useCallback, useRef, useEffect } from "react";
import { Container, Header, Text, TextBox, Span } from "./styles.js";
import { Button } from "../../../styles/button";
import { BsCheck2Circle as Tik } from "react-icons/bs";
import Modal from "../../newsletter-modal/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import {
  setEmail,
  setSubscribed,
} from "../../../redux/features/subscribe/sub-slice.js";

const Newsletter = () => {
  const theme = useTheme();
  console.log(theme.darkMode);
  const dispatch = useDispatch();
  const { email, subscribed } = useSelector((state) => state.subscriber);
  const inputRef = useRef();
  const subsRef = useRef();
  const [open, setOpen] = useState(false);

  const subsBtnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  };

  function handleSubmit(e) {
    e.preventDefault();
    inputRef.current.blur();
    inputRef.current.disabled = true;
    inputRef.current.style.userSelect = "none";
    inputRef.current.style.border = `2px solid ${theme.success.default}`;
    inputRef.current.style.pointerEvents = "none";
    inputRef.current.style.color = theme.darkMode
      ? "rgba(255,255,255,0.25)"
      : "rgba(0,0,0,0.25)";
    subsRef.current.disabled = true;
    subsRef.current.style.userSelect = "none";
    subsRef.current.style.pointerEvents = "none";
    setOpen(true);
    dispatch(setEmail(inputRef.current.value));
    dispatch(setSubscribed(true));
  }
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (email !== null) {
      inputRef.current.value = email;
      inputRef.current.blur();
      inputRef.current.disabled = true;
      inputRef.current.style.userSelect = "none";
      inputRef.current.style.pointerEvents = "none";
      inputRef.current.style.border = `2px solid ${theme.success.default}`;
      inputRef.current.style.color = theme.darkMode
        ? "rgba(255,255,255,0.25)"
        : "rgba(0,0,0,0.25)";
      subsRef.current.disabled = true;
      subsRef.current.style.userSelect = "none";
      subsRef.current.style.pointerEvents = "none";
    }
  }, [subscribed, theme.darkMode]);

  return (
    <Container onSubmit={handleSubmit}>
      <Header>
        Subscribe to our <Span>newsletter</Span>
      </Header>
      <Text>No spam, notifications only about new products, updates.</Text>
      <TextBox
        ref={inputRef}
        type="email"
        placeholder="Enter Your Email Here"
        required
      />
      <Button
        ref={subsRef}
        style={subsBtnStyle}
        fontSize={1.5}
        border-radius={0.25}
      >
        {subscribed ? "Subscribed" : "Subscribe"}
        {subscribed && <Tik />}
      </Button>
      <Modal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Newsletter;
