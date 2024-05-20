import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataContext";
import Pagination from "./Pagination";

const Cards = () => {
  const { data, currentPage, cardsPerPage, handleDelete } =
    useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="main-body">
      <div className="cards-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          currentCards.map((item) => (
            <div key={item.id} className="card">
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              >
                ×
              </button>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default Cards;
