import React from "react";
import Logo from "../navBar/logo";
import SocialIcons from "./social-icons";
import { neutral } from "../../utils/colors";
import {
  Footer as FT,
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
            Today's Trends was built for people to follow everyday's trends. To
            make it more interesting, the voice search was added as some of us
            get bored easily when reading anything. So, Today's Trends is for
            everyone who want to know what's happening around the world.
          </TextBox>
          <Hr />
        </BriefAbout>
        <UsefulLinks>
          <Title>Useful Links</Title>
          <FLink active_class_name="active" to="/">
            Home
          </FLink>
          <FLink active_class_name="active" to="/command-list">
            Command List
          </FLink>
          <FLink active_class_name="active" to="/about">
            About
          </FLink>
          <FLink active_class_name="active" to="/terms&conditions">
            Terms & Conditions
          </FLink>
          <FLink active_class_name="active" to="/developers">
            Developers
          </FLink>
          <Hr />
        </UsefulLinks>
        <FollowUs>
          <Title>Folow Us</Title>
          <SocialIcons size={"25px"} color={neutral[100]} />
          <Hr />
        </FollowUs>
        <Rights>
          COPYRIGHT &copy;Todays's Trends 2022. The Today's Trends is not
          responsible for the content of external sites.
        </Rights>
      </Container>
    </FT>
  );
};

export default Footer;
