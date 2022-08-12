import React, { useState, useEffect } from "react";
import Button from "./button";
import { useSelector, useDispatch } from "react-redux";
import { setPage, setAPI_KEY } from "../../../redux/features/news/news-slice";

import { Container } from "./styles";

// const Pages = ({ totalResults }) => {
const Pages = () => {
  const totalResults = 100;
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
        handleClick={() => dispatch(setPage(totalPages))}
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
