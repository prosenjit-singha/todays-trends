import React from "react";
import { Skeleton } from "@mui/material";
//styles
import {
  CardContainer,
  Card,
  Source,
  Date,
  Title,
  Desc,
  Image,
  ContentWrapper,
  Content,
  BottomBlock,
  ReadMore,
  Accuracy,
} from "../../styles/card-styles";

const CardSkeleton = () => {
  return (
    <CardContainer>
      <Card>
        <ContentWrapper>
          {/* <Image image={urlToImage} index={getIndex(index)} /> */}
          <Skeleton
            style={{ height: "100%", width: "100%" }}
            animation="wave"
            variant="rectangular"
          />
          <Content>
            {/* source  */}
            <Skeleton
              style={{
                height: "1.2rem%",
                width: "50%",
                marginBottom: "0.5rem",
                borderRadius: "0.15rem",
              }}
              animation="wave"
              variant="h3"
            />
            {/* date  */}
            <Skeleton
              style={{
                height: "1rem%",
                width: "30%",
                marginBottom: "0.5rem",
                borderRadius: "0.15rem",
              }}
              animation="wave"
              variant="h3"
            />
            {/* title  */}
            <Skeleton
              style={{
                height: "1.2rem%",
                marginBottom: "0.5rem",
                borderRadius: "0.15rem",
              }}
              animation="wave"
              variant="h3"
            />
            <Skeleton
              style={{
                height: "1.2rem%",
                width: "70%",
                marginBottom: "0.5rem",
                borderRadius: "0.15rem",
              }}
              animation="wave"
              variant="h3"
            />

            {/* description  */}
            <Skeleton
              style={{
                height: "1rem%",
                marginBottom: "0.4rem",
                borderRadius: "0.15rem",
              }}
              animation="wave"
              variant="h4"
            />
            <Skeleton
              style={{
                height: "1rem%",
                marginBottom: "0.4rem",
                borderRadius: "0.15rem",
              }}
              animation="wave"
              variant="h4"
            />
          </Content>
        </ContentWrapper>
        <BottomBlock
          style={{
            background: "rgba(0,0,0,0.1)",
            border: "none",
          }}
        >
          {/* Read More  */}
          <Skeleton
            style={{
              height: "2rem",
              width: "5.5rem",
              borderRadius: "0.15rem",
            }}
            animation="wave"
            variant="rectangular"
          />
          {/* Accuracy */}
          <Skeleton
            style={{
              height: "1.5rem",
              width: "6rem",
              marginLeft: "auto",
              borderRadius: "0.15rem",
            }}
            animation="wave"
            variant="rectangular"
          />
          {/* <Progress /> */}
          <Skeleton
            style={{
              height: "2rem",
              width: "2rem",
              marginLeft: "1rem",
            }}
            animation="wave"
            variant="circular"
          />
        </BottomBlock>
      </Card>
    </CardContainer>
  );
};

export default CardSkeleton;
