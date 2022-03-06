import { Button } from "@material-ui/core";
import React from "react";
import "./NewsCard.css";
import testImage from "../../img/alone.jpg";
const NewsCard2 = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="image">
          <img src={testImage} alt="img"></img>
        </div>
        <div className="date">11/12/22</div>
        <div className="source">
          <h3>SOURCE</h3>
        </div>
        <div className="title">
          <h2>Title</h2>
        </div>
        <div className="desc">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </p>
        </div>
        <div className="button">
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard2;
