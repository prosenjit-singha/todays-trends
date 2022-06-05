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
const SocialIcons = ({ size, color }) => {
  const styles = {
    cursor: "pointer",
    padding: "5px",
    borderRadius: "5px",
    boxShadow: `3px 3px 4px rgba(0,0,0, 0.6), 
      -2px -2px 4px rgba(255,255,255, 0.2)`,
  };

  return (
    <React.Fragment>
      <Container>
        <Fb id="fb" size={size} color={color} style={styles} />
        <Insta size={size} color={color} style={styles} />
        <Twitter size={size} color={color} style={styles} />
        <Linkedin size={size} color={color} style={styles} />
      </Container>
    </React.Fragment>
  );
};

export default SocialIcons;
