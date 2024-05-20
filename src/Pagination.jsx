// Pagination.js
import React, { useContext } from "react";
import { DataContext } from "./DataContext";
import "./Cards.css";

const Pagination = () => {
  const {
    currentPage,
    handleClickNext,
    handleClickPrevious,
    data,
    cardsPerPage,
  } = useContext(DataContext);

  return (
    <div className="pagination">
      <button onClick={handleClickPrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={handleClickNext}
        disabled={currentPage * cardsPerPage >= data.length}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
