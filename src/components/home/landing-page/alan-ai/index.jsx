import React from "react";
import styled from "styled-components";
import { IoIosArrowForward as Arrow } from "react-icons/io";
import BgImage from "../../../../img/hero/hero-5.jpg";
import GradientButton from "../../../button/gradient-button";
import { useComponentSize } from "react-use-size";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 300ms ease;
`;
const Title = styled.h3`
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 0.8rem;
`;
const SubTitle = styled.p`
  font-size: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.2rem;
`;

const Content = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
  border-radius: 0.25rem;
  overflow: hidden;
  &:hover > ${Image} {
    transform: scale(1.1);
  }
`;

const AlanAI = () => {
  const { ref, width } = useComponentSize();
  const buttonStyle = {
    fontSize: "1rem",
    display: "flex",
    flexDirection: width >= 185 ? "row" : "column",
    alignItems: "center",
    gap: "2px",
    justifyContent: "center",
  };

  const iconStyle = {
    fontSize: "1.5rem",
    padding: "0.15rem",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "50%",
  };

  return (
    <Container ref={ref}>
      <Image src={BgImage} alt="alan-background" />
      <Content>
        <Title>Meet With Alan</Title>
        <SubTitle>The most powerful open-source voice recognizer.</SubTitle>
        <GradientButton style={buttonStyle} color="blue">
          <div>Visit</div> <div>Alan</div>{" "}
          <Arrow style={width < 185 ? iconStyle : ""} />
        </GradientButton>
      </Content>
    </Container>
  );
};

export default AlanAI;
