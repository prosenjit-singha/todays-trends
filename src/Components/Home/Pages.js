import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../redux/features/filter/filter-slice";
import {
  fetchArticles,
  setAPI_KEY,
} from "../../redux/features/news/news-slice";

const Container = styled.div`
  margin-top: 1.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Pages = ({ totalResults }) => {
  //console.log("Pages Rendered: ");
  //consts
  const api = useSelector((state) => state.news.api);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filter.page);
  //dispatch(setPage(currentPage || 1));
  console.log("current page: ", currentPage);
  const fontSize = 1;
  const limit = parseInt(totalResults / 10);

  //functions
  const callAPI = (page) => {
    const api_key = api + "&page=" + page;
    dispatch(setPage(page));
    dispatch(setAPI_KEY(api_key));
  };
  const handleClick = (page) => {
    dispatch(setPage(page));
    callAPI(page);
  };
  const handlePrev = () => {
    callAPI(currentPage - 1);
  };
  const handleNext = () => {
    callAPI(currentPage + 1);
  };
  useEffect(() => {
    //dispatch(setPage(currentPage));
    return () => {};
  }, [currentPage]);
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
