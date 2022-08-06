import React from "react";
import {
  Container,
  Name,
  Intro,
  ImageContainer,
  Image,
  Content,
  SocialsWrapper,
  Icon,
} from "./styles";
import { red } from "@mui/material/colors";
import {
  FaFacebookF as Fb,
  FaInstagram as Insta,
  FaLinkedinIn as Linkedin,
  FaGithub as Github,
} from "react-icons/fa";

const Person = ({ data }) => {
  const size = "25px";
  const color = red[400];
  return (
    <Container>
      <ImageContainer>
        <Image src={data.imageURL} alt="PJ" />
      </ImageContainer>
      <Content>
        <Name>{data.name}</Name>
        <Intro>{data.intro}</Intro>
        <SocialsWrapper>
          <Icon href={data.fb} target="_blank">
            <Fb size={size} color={color} />
          </Icon>
          <Icon href={data.insta} target="_blank">
            <Insta size={size} color={color} />
          </Icon>
          <Icon href={data.linkedin} target="_blank">
            <Linkedin size={size} color={color} />
          </Icon>
          <Icon href={data.github} target="_blank">
            <Github size={size} color={color} />
          </Icon>
        </SocialsWrapper>
      </Content>
    </Container>
  );
};

export default Person;
