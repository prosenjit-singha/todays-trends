import React from "react";
import { Container } from "../../styles/containers";
import Person from "./person";
//import Colors from "../colors/Colors";
//import Wave from "../../img/animated-wave.svg";

const Dev = () => {
  const pj = {
    name: "Prosenjit Singha",
    intro: "I am a web developer!",
    fb: "https://www.facebook.com/aheibampj",
    linkedin: "https://www.linkedin.com/in/prosenjit052",
    insta: "https://www.instagram.com/pj_aheibam",
    github: "https://github.com/PJaheibam",
  };
  const samy = {
    name: "Mahmudur Rahman Samy",
    intro: "I am a web designer!",
    fb: "https://www.facebook.com/aheibampj",
    linkedin: "https://www.linkedin.com/in/prosenjit052",
    insta: "https://www.instagram.com/pj_aheibam",
    github: "https://github.com/PJaheibam",
  };
  return (
    <Container>
      <Person data={pj} />
      <Person data={samy} />
    </Container>
  );
};

export default Dev;
