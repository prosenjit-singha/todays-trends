import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Item, SubTitle, News } from "./styles";

const SKT = () => {
  return (
    <Item>
      {/* heading news  */}
      <News>
        {/* heading skeleton */}
        {/* image section  */}
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "1rem" }}
          animation="wave"
          variant="rectangular"
          height={160}
        />
        {/* title  */}
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "0.5rem" }}
          variant="h3"
          animation="wave"
        />
        {/* date and author  */}
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "0.5rem" }}
          variant="h3"
          animation="wave"
        />
        {/* description  */}
        <Skeleton
          style={{
            borderRadius: "0.25rem",
            marginBottom: "10px",
            height: "2rem",
          }}
          variant="rectangular"
          animation="wave"
        />
      </News>
      {/* footer news  */}
      <News>
        {/* title  */}
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "0.5rem" }}
          variant="h3"
          animation="wave"
        />
        {/* date and author  */}
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "0.5rem" }}
          variant="h3"
          animation="wave"
        />
        {/* description  */}
        <Skeleton
          style={{
            borderRadius: "0.25rem",
            marginBottom: "10px",
            height: "2rem",
          }}
          variant="rectangular"
          animation="wave"
        />
      </News>
      <News>
        {/* title  */}
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "0.5rem" }}
          variant="h3"
          animation="wave"
        />
        {/* date and author  */}
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "0.5rem" }}
          variant="h3"
          animation="wave"
        />
        {/* description  */}
        <Skeleton
          style={{
            borderRadius: "0.25rem",
            marginBottom: "10px",
            height: "2rem",
          }}
          variant="rectangular"
          animation="wave"
        />
      </News>
    </Item>
  );
};

export default React.memo(SKT);
