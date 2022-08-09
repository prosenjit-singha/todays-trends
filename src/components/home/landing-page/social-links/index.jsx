import React from "react";
import {
  FaFacebookF as Fb,
  FaTwitter as Twitter,
  FaInstagram as Insta,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";
import { Container, Item, IconContainer, Text } from "./style";
import { red, cyan, blue } from "@mui/material/colors";
import HeadingTitle from "../heading-title";

const SocialLinks = () => {
  const fb_bg = `linear-gradient(135deg, ${blue[500]}, ${blue[400]})`;
  const twt_bg = `linear-gradient(135deg, ${cyan[800]}, ${cyan[700]})`;
  const insta_bg = `linear-gradient(135deg, ${red[400]}, ${red[300]})`;
  const link_bg = `linear-gradient(135deg, ${blue[400]}, ${blue[500]})`;
  return (
    <Container>
      <HeadingTitle fontSize="1.5rem"> stay connected </HeadingTitle>
      {/* facebook  */}
      <Item
        href="https://www.facebook.com/react"
        target="_blank"
        bgColor={fb_bg}
      >
        <IconContainer>
          <Fb size={20} />
        </IconContainer>
        <Text>122.5K Followers</Text>
      </Item>

      {/* twitter  */}
      <Item href="https://twitter.com/react" target="_blank" bgColor={twt_bg}>
        <IconContainer>
          <Twitter size={20} />
        </IconContainer>
        <Text>761.3K Followers</Text>
      </Item>

      {/* instagram  */}
      <Item
        href="https://www.instagram.com/reactjsofficial/"
        target="_blank"
        bgColor={insta_bg}
      >
        <IconContainer>
          <Insta size={20} />
        </IconContainer>
        <Text>102.2K Followers</Text>
      </Item>

      {/* linkedin  */}
      <Item
        href="https://www.linkedin.com/company/reactjs-nj/"
        target="_blank"
        bgColor={link_bg}
      >
        <IconContainer>
          <Linkedin size={20} />
        </IconContainer>
        <Text>1K Followers</Text>
      </Item>
    </Container>
  );
};

export default SocialLinks;
