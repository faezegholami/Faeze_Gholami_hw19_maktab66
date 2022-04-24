import * as React from "react";
import { useContext } from "react";
import { GetDataContext } from "../context/GetDataContext";
import { Link } from "react-router-dom";

export default function ActionAreaCard() {
  const { data, setData } = useContext(GetDataContext);
  const searchCountry = async (term) => {
    if (term.length < 3 || term === "") return;
    const res = await fetch(`https://restcountries.com/v2/name/${term}`);
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  const filterByRegion = async region => {
    if(region == '') return
    const res = await fetch(`https://restcountries.com/v2/region/${region}`)
    console.log(res);
    const data = await res.json()
     setData(data)
  }

  return (
    <div>
      <div className="searching">
        <div className="searchInput">
          <input
            type="text"
            placeholder="🔎Search"
            onChange={(e) => searchCountry(e.target.value)}
          />
        </div>
        <div className="selectInput">
          <select
          onChange={ e => filterByRegion(e.target.value)}>
          <option value="" >
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="holdMainCard">
        {data.map((item, index) => (
          <Link
            to={{ pathname: `singlecard` }}
            state={item}
            className="everyCard"
            key={index}
          >
            <img src={item.flags.png} alt="" />
            <h4>Name: {item.name}</h4>
            <p>Population: {item.population}</p>
            <p>Region: {item.region}</p>
            <p>Capital: {item.capital}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
