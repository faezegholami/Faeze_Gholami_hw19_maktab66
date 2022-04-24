import * as React from "react";
import { useContext} from "react";
import { GetDataContext } from "../context/GetDataContext";
import { Link } from "react-router-dom";

export default function ActionAreaCard() {
  const { data } = useContext(GetDataContext);
 

  return (
    <div>
      {/* <div>
                
                <input type="text" placeholder="Search for a country..." onChange={ term => searchCountry(term.target.value)} />
                <select onChange={ val => filterByRegion(val.target.value)} >
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div> */}
      <div className="holdMainCard" >
        {data.map((item,index) => 
          <Link to={{pathname:`singlecard/${item.alpha2Code}`}} state={item} className="everyCard" key={index}>
            <img src={item.flags.png} alt="" />
            <h4>Name: {item.name}</h4>
            <p>Population: {item.population}</p>
            <p>Region: {item.region}</p>
            <p>Capital: {item.capital}</p>
          </Link>
        )}
      </div>
    </div>
  );
}
