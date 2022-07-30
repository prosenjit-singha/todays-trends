import React from "react";
import {
  FaFacebookF as Fb,
  FaTwitter as Twitter,
  FaInstagram as Insta,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";
import {
  Container,
  Item,
  IconContainer,
  Text,
  TitleContainer,
  Title,
  DoubleLine,
} from "./style";
import { red, cyan, blue, purple, magenta } from "../../../../utils/colors";
import HeadingTitle from "../heading-title";

const SocialLinks = () => {
  const fb_bg = `linear-gradient(135deg, ${blue[500]}, ${blue[400]})`;
  const twt_bg = `linear-gradient(135deg, ${cyan[800]}, ${cyan[700]})`;
  const insta_bg = `linear-gradient(135deg, ${red[400]}, ${red[300]})`;
  const link_bg = `linear-gradient(135deg, ${blue[400]}, ${blue[500]})`;
  return (
    <Container>
      <HeadingTitle fontSize="1.5rem"> stay connected </HeadingTitle>
      <Item bgColor={fb_bg}>
        <IconContainer>
          <Fb size={20} />
        </IconContainer>
        <Text>5.5K Followers</Text>
      </Item>
      <Item bgColor={twt_bg}>
        <IconContainer>
          <Twitter size={20} />
        </IconContainer>
        <Text>2K Followers</Text>
      </Item>
      <Item bgColor={insta_bg}>
        <IconContainer>
          <Insta size={20} />
        </IconContainer>
        <Text>5K Followers</Text>
      </Item>
      <Item bgColor={link_bg}>
        <IconContainer>
          <Linkedin size={20} />
        </IconContainer>
        <Text>1K Followers</Text>
      </Item>
    </Container>
  );
};

export default SocialLinks;
