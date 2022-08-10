import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { useSelector, useDispatch } from "react-redux";
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
  const fontSize = 1;
  const totalPages = parseInt(totalResults / 12) + 1;
  const [pageNo, setPageNo] = useState(0);
  const buttonStyles = {
    marginInline: "0.5rem",
  };

  //functions
  const callAPI = () => {
    const api_key = api + "&page=" + currentPage;
    dispatch(setPage(currentPage));
    dispatch(setAPI_KEY(api_key));
  };

  useEffect(() => {
    //will cause a rerender
    callAPI();
    setPageNo(5 * parseInt((currentPage - 1) / 5));
  }, [currentPage]);

  const handleClick = (page) => {
    dispatch(setPage(page));
    window.scrollTo(0, 0);
  };
  const handlePrev = () => {
    dispatch(setPage(currentPage - 1));
    window.scrollTo(0, 0);
  };
  const handleNext = () => {
    dispatch(setPage(currentPage + 1));
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      {/* Previous Button  */}
      <Button
        fontSize={fontSize}
        handleClick={handlePrev}
        disabled={currentPage === 1}
        styles={buttonStyles}
      >
        Previous
      </Button>

      {/* ...Button  */}
      <Button
        styles={{
          display: pageNo !== 0 ? "flex" : "none",
          marginInline: "0.5rem",
        }}
        handleClick={() => setPageNo((prev) => prev - 5)}
      >
        ...
      </Button>
      {[
        ...Array(
          totalPages > 5
            ? totalPages - pageNo < 5
              ? totalPages - pageNo
              : 5
            : totalPages
        ),
      ].map((element, index) => (
        <Button
          key={index}
          fontSize={fontSize}
          width={3}
          handleClick={handleClick}
          isactive={index + pageNo + 1 === currentPage}
          styles={buttonStyles}
        >
          {index + pageNo + 1}
        </Button>
      ))}

      {/* ... button  */}
      <Button
        styles={{
          marginInline: "0.5rem",
          display:
            totalPages > 5
              ? pageNo + 5 < totalPages
                ? "flex"
                : "none"
              : "none",
        }}
        handleClick={() => setPageNo((prev) => prev + 5)}
      >
        ...
      </Button>
      <Button
        styles={{
          marginInline: "0.5rem",
          display:
            totalPages > 5
              ? pageNo + 5 < totalPages
                ? "flex"
                : "none"
              : "none",
        }}
        handleClick={() => dispatch(setPage(6))}
      >
        Last Page
      </Button>

      {/* Next Button  */}
      <Button
        fontSize={fontSize}
        handleClick={handleNext}
        disabled={currentPage === totalPages}
        styles={buttonStyles}
      >
        Next
      </Button>
    </Container>
  );
};

export default Pages;
