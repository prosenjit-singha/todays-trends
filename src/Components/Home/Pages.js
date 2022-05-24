import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { useSelector, useDispatch } from "react-redux";
//import { setPage } from "../../redux/features/filter/filter-slice";
import { setPage } from "../../redux/features/news/news-slice";
import { setAPI_KEY } from "../../redux/features/news/news-slice";

const Container = styled.div`
  margin-top: 1.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Pages = ({ totalResults }) => {
  //consts
  const api = useSelector((state) => state.news.api);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.news.page);
  console.log(currentPage);
  const fontSize = 1;
  const limit = parseInt(totalResults / 12);

  //functions
  const callAPI = () => {
    const api_key = api + "&page=" + currentPage;
    dispatch(setPage(currentPage));
    dispatch(setAPI_KEY(api_key));
  };

  useEffect(() => {
    callAPI();
  }, []);

  const handleClick = (page) => {
    dispatch(setPage(page));
    window.scrollTo(0, 0);
  };
  const handlePrev = () => {
    dispatch(setPage(currentPage - 1));
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    dispatch(setPage(currentPage - 1));
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Button
        fontSize={fontSize}
        handleClick={handlePrev}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      {[...Array(limit)].map((element, index) => (
        <Button
          key={index}
          fontSize={fontSize}
          width={3}
          handleClick={handleClick}
          isactive={index + 1 === currentPage}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        fontSize={fontSize}
        handleClick={handleNext}
        disabled={currentPage === limit}
      >
        Next
      </Button>
    </Container>
  );
};

export default Pages;
