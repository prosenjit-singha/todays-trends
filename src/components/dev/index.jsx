import React from "react";
import { Container } from "../../styles/containers";
import Person from "./person";
import styled from "styled-components";
import { device } from "../../utils/device";
//import Wave from "../../img/animated-wave.svg";
import PJ from "../../img/developers/pj.jpg";
import Samy from "../../img/developers/Samy.jpeg";
import { Section } from "../../styles/containers";

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
  }
`;

const Dev = () => {
  const pj = {
    name: "Prosenjit Singha",
    imageURL: PJ,
    intro: "Web developer",
    fb: "https://www.facebook.com/aheibampj",
    linkedin: "https://www.linkedin.com/in/prosenjit052",
    insta: "https://www.instagram.com/pj_aheibam",
    github: "https://github.com/PJaheibam",
  };
  const samy = {
    name: "Mahmudur Rahman Samy",
    imageURL: Samy,
    intro: "UI designer",
    fb: "https://www.facebook.com/mrahmansamy",
    linkedin: "https://www.linkedin.com/in/mahmudursamy/",
    insta: "https://www.instagram.com/sammydgoodfella",
    github: "https://github.com/mahmudur-samy",
  };

  const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Container style={styles}>
      <Wrapper>
        <Person data={pj} />
        <Person data={samy} />
      </Wrapper>
      {/* <Colors /> */}
    </Container>
  );
};

export default Dev;
