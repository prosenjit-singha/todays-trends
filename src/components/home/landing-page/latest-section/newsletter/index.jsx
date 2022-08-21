import React, { useState, useCallback, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { useTheme } from "styled-components";
import { BsCheck2Circle as Tik } from "react-icons/bs";
import { blue } from "@mui/material/colors";
import GradientButton from "../../../../button/gradient-button";
import Modal from "../../../../newsletter-modal";
import {
  setEmail,
  setSubscribed,
} from "../../../../../redux/features/subscribe/sub-slice";

const Container = styled.form`
  width: 100%;
  height: fit-content;
  padding: 2rem 1rem;
  margin-bottom: 3rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.background.paper};
`;
const Title = styled.h4`
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;
const SubTitle = styled.p`
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  color: ${(props) => props.theme.text.primary};
  background-color: ${(props) =>
    props.theme.isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.15)"};
  text-align: center;
  font-size: 1.2rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  transition: background-color 300ms ease;
  &:focus-visible {
    background-color: ${(props) =>
      props.theme.isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
    text-align: center;
    outline: 2px solid ${blue[400]};
    outline-offset: 2px;
  }
`;

const Newsletter = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { email, subscribed } = useSelector((state) => state.subscriber);
  const inputRef = useRef();
  const subsRef = useRef();

  const btnStyle = {
    padding: "0.5rem 1rem",
    fontSize: "1.25rem",
    width: "100%",
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
      inputRef.current.style.color = theme.darkMode
        ? "rgba(255,255,255,0.25)"
        : "rgba(0,0,0,0.25)";
      subsRef.current.disabled = true;
      subsRef.current.style.userSelect = "none";
      subsRef.current.style.pointerEvents = "none";
    }
  }, [subscribed]);

  return (
    <Container onSubmit={handleSubmit}>
      <Title>Subscribe to our newsletter</Title>
      <SubTitle>
        No spam, notifications only about latest news & updates.
      </SubTitle>
      <Input
        ref={inputRef}
        type="email"
        required
        placeholder="...@exampl.com"
      />
      <GradientButton ref={subsRef} style={btnStyle} type="submit">
        {subscribed ? "Subscribed" : "Subscribe Now"}
        {subscribed && <Tik />}
      </GradientButton>
      <Modal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Newsletter;
