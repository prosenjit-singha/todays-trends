import styled from "styled-components";
import React from "react";
import {
  FaFacebookF as Fb,
  FaTwitter as Twitter,
  FaInstagram as Insta,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

const smDevice = "791px";

const Shine = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: blue;
`;
const Container = styled.div`
  display: flex;
  width: 180px;
  height: auto;
  justify-content: space-evenly;
  margin-bottom: 8px;
  @media (min-width: ${smDevice}) {
    height: auto;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
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
