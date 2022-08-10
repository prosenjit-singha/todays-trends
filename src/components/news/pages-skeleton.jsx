import React from "react";
import { Skeleton } from "@mui/material";
import { Section } from "../../styles/containers";
import styled, { useTheme } from "styled-components";
import { useBreakpoints } from "react-use-size";

const Container = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const PagesSkeleton = () => {
  const theme = useTheme();
  const [isSmall, isMedium] = useBreakpoints([768, 992]);
  const styles = {
    background: theme.background.paper,
    borderRadius: "0.2rem",
    height: "2.5rem",
    width: "5.5rem",
  };

  return (
    <Container>
      {/* Previous Button  */}
      <Skeleton style={styles} variant="rectangular" animation="wave" />
      {/* Some Buttons  */}
      {[...Array(isSmall ? 2 : isMedium ? 3 : 5).keys()].map((_, i) => (
        <Skeleton
          key={i}
          style={{
            ...styles,
            width: "3rem",
          }}
          variant="rectangular"
          animation="wave"
        />
      ))}
      {/* Next Button  */}
      <Skeleton style={styles} variant="rectangular" animation="wave" />
    </Container>
  );
};

export default PagesSkeleton;
