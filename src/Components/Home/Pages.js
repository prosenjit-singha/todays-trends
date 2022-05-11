import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../redux/features/filter/filter-slice";
import { fetchArticles } from "../../redux/features/news/news-slice";

const Container = styled.div`
  margin-top: 1.8rem;
  display: flex;
  justify-content: center;
`;

const Pages = ({ totalResults }) => {
  //consts
  const currentPage = useSelector((state) => state.filter.page);
  const api_key = useSelector((state) => state.news.api);
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(currentPage);
  const fontSize = 1;
  const limit = parseInt(totalResults / 10);

  //functions
  const callAPI = (page) => {
    const new_api_key = api_key + "&page=" + page;
    dispatch(setPage(page));
    dispatch(fetchArticles(new_api_key));
  };
  const handleClick = (page) => {
    setPageNo(page);
    callAPI(page);
  };
  const handlePrev = () => {
    console.log("previous: ", pageNo - 1);
    callAPI(pageNo - 1);
    setPageNo((prev) => prev - 1);
  };
  const handleNext = () => {
    console.log("next: ", pageNo + 1);
    callAPI(pageNo + 1);
    setPageNo((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("page:", pageNo);
    return () => {};
  }, []);
  return (
    <Container>
      <Button fontSize={fontSize} handleClick={handlePrev}>
        Previous
      </Button>
      {[...Array(limit)].map((element, index) => (
        <Button
          key={index}
          fontSize={fontSize}
          width={3}
          handleClick={handleClick}
          active={index + 1 === currentPage}
        >
          {index + 1}
        </Button>
      ))}
      <Button fontSize={fontSize} handleClick={handleNext}>
        Next
      </Button>
    </Container>
  );
};

export default Pages;
