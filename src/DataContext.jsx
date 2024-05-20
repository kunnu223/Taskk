// DataContext.js
import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickNext = () => {
    if (currentPage * cardsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDelete = (id) => {
    setData(data.filter((card) => card.id !== id));
  };

  return (
    <DataContext.Provider
      value={{
        data,
        currentPage,
        cardsPerPage,
        handleClickNext,
        handleClickPrevious,
        handleDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
