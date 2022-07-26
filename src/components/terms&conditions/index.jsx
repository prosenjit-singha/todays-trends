import React from "react";
import { Container } from "../../styles/containers";
import ReactTooltip from "react-tooltip";

const Terms = () => {
  return (
    <Container>
      <div data-tip data-for="toolTip">
        Terms & Conditions
      </div>
      <button data-tip data-for="registerTip">
        Register
      </button>

      <ReactTooltip id="registerTip" place="top" type="dark" effect="float">
        Tooltip for the register button
      </ReactTooltip>
    </Container>
  );
};

export default Terms;
