// App.js
import React from "react";
import { DataProvider } from "./DataContext";
import Cards from "./Cards";

const App = () => {
  return (
    <DataProvider>
      <Cards />
    </DataProvider>
  );
};

export default App;
