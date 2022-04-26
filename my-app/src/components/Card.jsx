import * as React from "react";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GetDataContext } from "../context/GetDataContext";

export default function SingleCard() {
  const { data } = React.useContext(GetDataContext);
  console.log(data.map(e=>e.alpha3Code));
  let state = useLocation();
 
  const [map, setMap] = React.useState(state.state);

  const handleClick = (border) => {
    const findItem = data.find((name) =>(name.alpha3Code===border.item))
      console.log(findItem);
      console.log(data);
      setMap(findItem)
    
    };
    console.log(map)

  let navigate = useNavigate();

  const goHomeBtn = () => navigate("/");
  return (
    <div className="card">
      <button className="back" onClick={() => goHomeBtn()}>
        ⟵ Back
      </button>

      <div className="cardHolder">
        <div>
          <img src={map.flags.png} alt="" />
        </div>
        <div>
          <h1 className="name">{map.name}</h1>
          <div className="textHolder">
            <div>
              <p>Native Name: {map.nativeName}</p>
              <p>Population: {map.population}</p>
              <p>Region: {map.region}</p>
              <p>Sub Region: {map.subregion}</p>
              <p>Capital: {map.capital}</p>
            </div>
            <div>
              <p>Top Level Domain: {map.topLevelDomain}</p>
              <p>Currencies: {map.currencies.map((e) => e.code)}</p>
              <p>Languages: {map.languages.map((r) => `${r.name},`)}</p>
            </div>
          </div>
          <div className="name">
            Border Countries:
            {map.borders ? (
              map.borders.map((item, index) => {
              return data.map(el=>{
                if(el.alpha3Code===item){
                  return(
                    <button
                    className="linkes"
                    onClick={() => handleClick({item})}
                    key={index}
                  >
                    {el.name}
                  </button>
                  )
                }
              }) 
              })
            ) : (
              <label>No border</label>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
