import React, { useRef } from "react";
import Logo from "../NavBar/Logo";
import { Footer as FT } from "../Styles/Containers";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { NavLink } from "react-router-dom";
import { colors } from "../Styles/Variables";
import {
  FaFacebookF as Fb,
  FaTwitter as Twitter,
  FaInstagram as Insta,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

const SocialIcons = ({ size, color }) => {
  const styles = {
    padding: "5px",
    borderRadius: "5px",
    boxShadow: `3px 3px 4px rgba(0,0,0, 0.6), 
    -2px -2px 4px rgba(255,255,255, 0.2)`,
  };
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
  `;
  const fb = useRef();
  const handleClick = () => {
    console.log(document.getElementById("fb"));
  };
  return (
    <React.Fragment>
      <Container>
        <Fb
          id="fb"
          size={size}
          color={color}
          style={styles}
          onClick={handleClick}
        />
        <Insta size={size} color={color} style={styles} />
        <Twitter size={size} color={color} style={styles} />
        <Linkedin size={size} color={color} style={styles} />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  width: 100%;
  justify-content: center;
  min-height: 100px;
  max-height: fit-content;
  background-color: #062428;
  padding-top: 0.8rem;
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const BriefAbout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-row: 1/2;
`;
const TextBox = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  font-weight: lighter;
  width: 85%;
  color: white;
  text-align: center;
`;
const UsefulLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-row: 2/3;
`;

const FLink = styled(NavLink)`
  color: ${colors.neutral[200]};
  font-weight: lighter;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
const FollowUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 3/4;
`;

const Rights = styled.span`
  display: flex;
  justify-content: center;
  grid-row: 4/5;
  text-align: center;
  padding: 0.5rem 0rem;
  padding-bottom: 1rem;
  font-weight: lighter;
`;
const Hr = styled.div`
  background-color: rgb(6 36 40);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6),
    -2px -2px 2px rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  height: 3px;
  width: 90%;
  margin: 8px 0rem;
`;

const Footer = () => {
  return (
    <FT>
      <Container>
        <BriefAbout>
          <Logo />
          <TextBox>
            fQuis dolor veniam dolore ipsum sunt ad exercitation laboris. Sint
            irure amet sint anim do incididunt ea excepteur ipsum deserunt
            occaecat do. Anim adipisicing exercitation sit officia tempor est
            mollit qui pariatur duis ullamco consequat enim qui. In Lorem aliqua
            dolor ad ex culpa voluptate
          </TextBox>
          <Hr />
        </BriefAbout>
        <UsefulLinks>
          <h5>Useful Links</h5>
          <FLink to="/">Home</FLink>
          <FLink to="/command-list">Command List</FLink>
          <FLink to="/about">About</FLink>
          <FLink to="/terms&conditions">Terms & Conditions</FLink>
          <FLink to="/developers">Meet Developers</FLink>
          <Hr />
        </UsefulLinks>
        <FollowUs>
          <h5>Folow Us</h5>
          <SocialIcons size={"2rem"} color={colors.neutral[300]} />
          <Hr />
        </FollowUs>
        <Rights>All rights reserved by &copy;today's trends 2022</Rights>
      </Container>
    </FT>
  );
};

export default Footer;
