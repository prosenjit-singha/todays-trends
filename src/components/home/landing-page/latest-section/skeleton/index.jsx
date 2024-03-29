import React from "react";
import { Skeleton } from "@mui/material";
import { Main, Item, ImageContainer, Content, SubTitle } from "./styles";

const SKT = () => {
  return (
    <Main>
      {[1, 2, 3, 4].map((_, index) => (
        <Item key={index}>
          <ImageContainer>
            <Skeleton
              style={{
                borderRadius: "0.15rem",
                width: "100%",
                height: "100%",
              }}
              animation="wave"
              variant="rectangular"
            />
          </ImageContainer>
          <Content>
            {/* badge  */}
            <Skeleton
              style={{
                borderRadius: "0.15rem",
                marginBottom: "0.5rem",
                width: "77px",
                height: "34px",
              }}
              animation="wave"
              variant="rectangular"
            />
            {/* Title Starts*/}
            <Skeleton
              style={{ marginBlock: "0.25rem" }}
              animation="wave"
              variant="h1"
            />
            <Skeleton
              style={{ marginBlock: "0.25rem" }}
              animation="wave"
              variant="h1"
            />
            <Skeleton
              style={{ marginBlock: "0.25rem" }}
              animation="wave"
              variant="h1"
            />
            {/* Title Ends */}
            <SubTitle>
              <Skeleton
                variant="h1"
                style={{ marginRight: "1rem", height: "1.2rem" }}
                animation="wave"
                width={20}
              />
              <Skeleton
                variant="h1"
                style={{ height: "1.2rem" }}
                animation="wave"
                width={120}
              />
            </SubTitle>
          </Content>
        </Item>
      ))}
    </Main>
  );
};

export default React.memo(SKT);
