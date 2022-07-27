import React, { useState } from "react";
import { useSpring } from "react-spring";
import { red } from "../../../../utils/colors";
import {
  Container,
  Body,
  Side,
  Title,
  Buttons,
  Button,
  Header,
  TitleContainer,
  DoubleLine,
} from "./styles";

const Source = ({ children, id = null, handleClick, activeSource }) => {
  const isActive = activeSource === children.toLowerCase();
  const props = useSpring({
    background: isActive ? red[400] : " rgba(255, 102, 102, 0.5)",
    boxShadow: isActive
      ? "0 3px 10px  rgba(255, 102, 102, 0.5)"
      : "0 0px 0px  rgba(255, 102, 102, 0)",
  });
  return (
    <Button
      data_btn_id={id}
      active={isActive}
      onClick={handleClick}
      style={props}
    >
      {children}
    </Button>
  );
};

const Sources = () => {
  const [activeSource, setActiveSource] = useState("technology");

  function handleClick(e) {
    const innerText = e.target.innerText.toLowerCase();
    if (innerText !== activeSource) {
      setActiveSource(innerText);
    }
  }

  return (
    <Buttons>
      <Source id="first" handleClick={handleClick} activeSource={activeSource}>
        Technology
      </Source>
      <Source handleClick={handleClick} activeSource={activeSource}>
        Business
      </Source>
      <Source handleClick={handleClick} activeSource={activeSource}>
        Science
      </Source>
      <Source id="last" handleClick={handleClick} activeSource={activeSource}>
        Health
      </Source>
    </Buttons>
  );
};

const MostPopularSources = () => {
  return (
    <Container>
      <Body>
        <Header>
          <TitleContainer>
            <Title>Most Popular Sources</Title>
            <DoubleLine />
          </TitleContainer>
          <Sources />
        </Header>
      </Body>
      <Side></Side>
    </Container>
  );
};

export default MostPopularSources;
