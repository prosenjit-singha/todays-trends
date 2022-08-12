import styled from "styled-components";
import React from "react";
import {
  FaFacebookF as Fb,
  FaTwitter as Twitter,
  FaInstagram as Insta,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";
import { device } from "../../utils/device";
import { redG } from "../../utils/gradient-colors";

const Container = styled.div`
  display: flex;
  height: auto;
  gap: 0.5rem;
  justify-content: space-evenly;
  @media ${device.tabletM} {
    height: auto;
  }
`;
const Icon = styled.div`
  border-radius: 50%;
  cursor: pointer;
  padding: 8px;
  background-image: ${redG};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-radius 300ms ease;
  &:hover {
    border-radius: 5px;
  }
`;

const SocialIcons = ({ size, color }) => {
  return (
    <React.Fragment>
      <Container>
        <Icon>
          <Fb size={size} color={color} />
        </Icon>
        <Icon>
          <Insta size={size} color={color} />
        </Icon>
        <Icon>
          <Twitter size={size} color={color} />
        </Icon>
        <Icon>
          <Linkedin size={size} color={color} />
        </Icon>
      </Container>
    </React.Fragment>
  );
};

export default SocialIcons;
