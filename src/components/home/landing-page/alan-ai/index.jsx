import React from "react";
import styled from "styled-components";
import { IoIosArrowForward as Arrow } from "react-icons/io";
import BgImage from "../../../../img/hero/hero-5.jpg";
import { blue } from "../../../../utils/colors";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 300ms ease;
`;
const Title = styled.h3`
  text-align: center;
  text-transform: capitalize;
`;
const SubTitle = styled.p`
  font-size: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`;
const Button = styled.button`
  border: none;
  border-radius: 0.25rem;
  background: ${blue[400]};
  outline: none;
  margin-inline: auto;
  margin-top: 1.5rem;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.3em 0.5em;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 300ms ease;
  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  }
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
  border-radius: 0.25rem;
  overflow: hidden;
  &:hover > ${Image} {
    transform: scale(1.1);
  }
`;

const AlanAI = () => {
  return (
    <Container>
      <Image src={BgImage} alt="alan-background" />
      <Content>
        <Title>Meet With Alan</Title>
        <SubTitle>The most powerful open-source voice recognizer.</SubTitle>
        <Button>
          Visit Alan <Arrow />
        </Button>
      </Content>
    </Container>
  );
};

export default AlanAI;
