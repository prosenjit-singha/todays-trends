import React from "react";
import testImage from "../../img/alone.jpg";
import "./NC.css";
const NC = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="image">
          <img src={testImage} alt="img" />
        </div>
        <div className="date-n-src">
          <span className="date">10/03/22</span>
          <span className="src">
            <h3>CNN</h3>
          </span>
        </div>
        <div className="title">
          <h2>Title</h2>
        </div>
        <div className="desc">
          <p>loadlk dfkadf asdkfhasdkfdf dfsdf dfsdf dfd jk sdfjkkf </p>
        </div>
        <div className="button">
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default NC;
