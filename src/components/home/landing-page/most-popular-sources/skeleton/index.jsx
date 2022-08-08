import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Item, SubTitle, News } from "./styles";

const SKT = () => {
  return (
    <Item>
      {/* heading news  */}
      <News>
        {/* heading skeleton */}
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "16px" }}
          animation="wave"
          variant="rectangular"
          height={160}
        />
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "16px" }}
          variant="h3"
          animation="wave"
        />
        <SubTitle>
          <Skeleton variant="rectangular" animation="wave" width={150} />
          <Skeleton variant="rectangular" animation="wave" width={150} />
        </SubTitle>
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "10px" }}
          variant="rectangular"
          animation="wave"
          height={60}
        />
      </News>
      {/* footer news  */}
      <News>
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "16px" }}
          variant="h3"
          animation="wave"
        />
        <SubTitle>
          <Skeleton variant="rectangular" animation="wave" width={150} />
          <Skeleton variant="rectangular" animation="wave" width={150} />
        </SubTitle>
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "10px" }}
          variant="rectangular"
          animation="wave"
          height={60}
        />
      </News>
      <News>
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "16px" }}
          variant="h3"
          animation="wave"
        />
        <SubTitle>
          <Skeleton variant="rectangular" animation="wave" width={150} />
          <Skeleton variant="rectangular" animation="wave" width={150} />
        </SubTitle>
        <Skeleton
          style={{ borderRadius: "0.15rem", marginBottom: "10px" }}
          variant="rectangular"
          animation="wave"
          height={60}
        />
      </News>
    </Item>
  );
};

export default React.memo(SKT);
