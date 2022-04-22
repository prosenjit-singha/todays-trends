import React from "react";
import Logo from "../NavBar/Logo";
import SocialIcons from "./SocialIcons";
import { Footer as FT } from "../Styles/Containers";
import { neutral } from "../../Utiles/Colors";
import {
  Container,
  BriefAbout,
  TextBox,
  UsefulLinks,
  FLink,
  FollowUs,
  Rights,
  Hr,
  Title,
} from "./styles";

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
          <Title>Useful Links</Title>
          <FLink to="/">Home</FLink>
          <FLink to="/command-list">Command List</FLink>
          <FLink to="/about">About</FLink>
          <FLink to="/terms&conditions">Terms & Conditions</FLink>
          <FLink to="/developers">Meet Developers</FLink>
          <Hr />
        </UsefulLinks>
        <FollowUs>
          <Title>Folow Us</Title>
          <SocialIcons size={"2rem"} color={neutral[100]} />
          <Hr />
        </FollowUs>
        <Rights>All rights reserved by &copy;today's trends 2022</Rights>
      </Container>
    </FT>
  );
};

export default Footer;
