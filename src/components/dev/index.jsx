import React from "react";
import { Container } from "../../styles/containers";
import Person from "./person";
import styled from "styled-components";
import { device } from "../../utils/device";
//import Wave from "../../img/animated-wave.svg";

const Wrapper = styled.div`
  width: 100%;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  @media ${device.tablet} {
    padding-inline: 5rem;
    flex-direction: row;
    justify-content: center;
  }
`;

const Dev = () => {
  const pj = {
    name: "Prosenjit Singha",
    intro: "Web developer",
    fb: "https://www.facebook.com/aheibampj",
    linkedin: "https://www.linkedin.com/in/prosenjit052",
    insta: "https://www.instagram.com/pj_aheibam",
    github: "https://github.com/PJaheibam",
  };
  const samy = {
    name: "Mahmudur Rahman Samy",
    intro: "UI designer",
    fb: "https://www.facebook.com/aheibampj",
    linkedin: "https://www.linkedin.com/in/prosenjit052",
    insta: "https://www.instagram.com/pj_aheibam",
    github: "https://github.com/PJaheibam",
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
