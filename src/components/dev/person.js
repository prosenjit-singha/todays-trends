import React from "react";
import { Container, Name, Intro, Image, SocialsWrapper, Icon } from "./styles";
import { red } from "../../utils/colors";
import {
  FaFacebookF as Fb,
  FaInstagram as Insta,
  FaLinkedinIn as Linkedin,
  FaGithub as Github,
} from "react-icons/fa";

const person = ({ data }) => {
  const size = "25px";
  const color = red[400];
  return (
    <Container>
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
      <Image src="https://picsum.photos/200" alt="PJ" />
      <Name>{data.name}</Name>
      <Intro>{data.intro}</Intro>
    </Container>
  );
};

export default person;
