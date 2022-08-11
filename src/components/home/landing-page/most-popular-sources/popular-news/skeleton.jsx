import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { ImageContainer, Content, Footer, Date, Item } from "./styles";

const SKT = () => {
  return (
    <Item>
      <ImageContainer style={{ background: "transparent" }}>
        <Skeleton
          style={{ width: "100%", height: "100%", borderRadius: "0.15rem" }}
          animation="wave"
          variant="rectangular"
        />
      </ImageContainer>
      <Content>
        {/* badge */}
        <Skeleton
          style={{
            width: "30%",
            height: "1.8rem",
            borderRadius: "0.25rem",
            marginBottom: "0.5rem",
          }}
          animation="wave"
          variant="h2"
        />
        {/* title */}
        <Skeleton
          style={{
            width: "100%",
            borderRadius: "0.15rem",
            marginBottom: "0.25rem",
          }}
          animation="wave"
          variant="h1"
        />
        <Skeleton
          style={{
            width: "100%",
            borderRadius: "0.15rem",
            marginBottom: "0.5rem",
          }}
          animation="wave"
          variant="h1"
        />
        <Footer>
          {/* date  */}
          <Skeleton
            style={{
              width: "20%",
              borderRadius: "0.15rem",
              marginBottom: "0.5rem",
              marginRight: "1rem",
            }}
            animation="wave"
            variant="h1"
          />
          <Skeleton
            style={{
              width: "50%",
              borderRadius: "0.15rem",
              marginBottom: "0.5rem",
            }}
            animation="wave"
            variant="h1"
          />
        </Footer>
      </Content>
    </Item>
  );
};

export default React.memo(SKT);
