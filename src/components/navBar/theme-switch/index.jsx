import React from "react";
import { useTheme } from "styled-components";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { Container, Image } from "./styles";
import { neutral } from "../../../utils/colors";

const Icon = ({ mode }) => {
  const styles = {
    width: "25",
    height: "25",
    color: mode === "dark" ? neutral[200] : neutral[100],
  };

  return (
    <Image>
      {mode === "dark" ? (
        <BsSunFill style={styles} />
      ) : (
        <IoMdMoon style={styles} />
      )}
    </Image>
  );
};

const ThemeSwitch = ({ darkMode, setDarkMode }) => {
  const theme = useTheme();
  const handleClick = () => {
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    setDarkMode((prev) => !prev);
  };
  return (
    <Container onClick={handleClick}>
      <Icon mode={theme.name} />
    </Container>
  );
};

export default ThemeSwitch;
