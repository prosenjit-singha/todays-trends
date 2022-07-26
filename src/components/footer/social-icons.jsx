import styled from "styled-components";
import React from "react";
import {
  FaFacebookF as Fb,
  FaTwitter as Twitter,
  FaInstagram as Insta,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";
import { device } from "../../utils/device";

const Container = styled.div`
  display: flex;
  width: 180px;
  height: auto;
  justify-content: space-evenly;
  margin-block: 8px;
  @media ${device.tabletM} {
    height: auto;
  }
`;
const Icon = styled.div`
  height: 33px;
  width: 33px;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  background-color: ${(props) => props.theme.accent};
  display: flex;
  justify-content: center;
  align-items: center;
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
