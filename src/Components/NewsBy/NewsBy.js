import React from "react";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

function useHandleNewsBy() {
  const { option1, option2 } = useParams();

  useEffect(() => {
    const isNewsByActive = document.getElementById("newsBy");
    const handleNewsBy = () => {
      if (option1 != null && option2 != null) {
        isNewsByActive.classList.add("active");
      }
    };
    handleNewsBy();
    return () => {
      isNewsByActive.classList.remove("active");
    };
  }, [option2]);
}

const NewsBy = () => {
  useHandleNewsBy();
  return <div>NewsBy</div>;
};

export default NewsBy;
