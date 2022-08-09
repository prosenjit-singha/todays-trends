import React from "react";
import {
  Main,
  Item,
  ImageContainer,
  Content,
  HeaderImage,
  SubTitle,
} from "./styles";

import { Skeleton } from "@mui/material";

const SKT = () => {
  return (
    <Main>
      <HeaderImage>
        <Skeleton
          style={{ width: "100%", height: "100%" }}
          animation="wave"
          variant="rectangular"
        />
        <Content
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.05)",
          }}
        >
          {/* badge  */}
          <Skeleton
            style={{
              borderRadius: "0.15rem",
              marginBottom: "1rem",
            }}
            width={78}
            height={35}
            variant="rectangular"
            animation="wave"
          />
          {/* title  */}
          <Skeleton
            style={{
              marginBottom: "0.5rem",
              borderRadius: "0.15rem",
              width: "100%",
            }}
            height={20}
            variant="h1"
            animation="wave"
          />
          <Skeleton
            style={{
              marginBottom: "0.5rem",
              borderRadius: "0.15rem",
              width: "100%",
            }}
            height={20}
            variant="h1"
            animation="wave"
          />

          <SubTitle>
            <Skeleton
              style={{ borderRadius: "0.15rem", marginRight: "0.85rem" }}
              animation="wave"
              variant="rectangular"
              width={20}
              height={20}
            />
            <Skeleton
              style={{ borderRadius: "0.15rem" }}
              animation="wave"
              variant="rectangular"
              width={150}
              height={20}
            />
          </SubTitle>
        </Content>
      </HeaderImage>
      {[1, 2, 3, 4].map((_, index) => (
        <Item key={index}>
          <ImageContainer>
            <Skeleton
              style={{ width: "100%", height: "100%" }}
              animation="wave"
              variant="rectangular"
            />
          </ImageContainer>
          <Content>
            {/* badge  */}
            <Skeleton
              style={{
                borderRadius: "0.15rem",
                marginBottom: "1rem",
              }}
              width={78}
              height={35}
              variant="rectangular"
              animation="wave"
            />
            {/* title  */}
            <Skeleton
              style={{
                marginBottom: "0.5rem",
                borderRadius: "0.15rem",
                width: "100%",
              }}
              height={20}
              variant="h1"
              animation="wave"
            />
            <Skeleton
              style={{
                marginBottom: "0.5rem",
                borderRadius: "0.15rem",
                width: "100%",
              }}
              height={20}
              variant="h1"
              animation="wave"
            />
            <SubTitle>
              <Skeleton
                style={{ borderRadius: "0.15rem", marginRight: "0.85rem" }}
                animation="wave"
                variant="rectangular"
                width={20}
                height={20}
              />
              <Skeleton
                style={{ borderRadius: "0.15rem" }}
                animation="wave"
                variant="rectangular"
                width={150}
                height={20}
              />
            </SubTitle>
          </Content>
        </Item>
      ))}
    </Main>
  );
};

export default SKT;
