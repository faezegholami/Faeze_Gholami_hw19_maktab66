import ActionAreaCard from "./components/ActionAreaCard";
import SingleCard from "./components/Card";
import "./css/main.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { useContext } from "react";
import { GetDataContext } from "./context/GetDataContext";

function App() {
  const {data} = useContext(GetDataContext)
  return (
    <>
      <Header />
      <Routes>
        {data.map((item ,index)=>
        <Route path={`singlecard/${item.alpha2Code}`} element={<SingleCard />} key={index} />
          
          )}
        <Route path="/" element={<ActionAreaCard />} />
      </Routes>
    </>
  );
}

export default App;
