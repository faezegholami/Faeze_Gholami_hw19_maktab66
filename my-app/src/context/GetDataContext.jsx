import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GetDataContext = createContext({});

const GetDataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <GetDataContext.Provider value={{ data, setData }}>
      {children}
    </GetDataContext.Provider>
  );
};

export default GetDataProvider;
