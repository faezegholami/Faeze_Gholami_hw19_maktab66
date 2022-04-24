import * as React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function SingleCard() {
 
  
  let state = useLocation();
  state = state.state;
  
  let navigate = useNavigate();

  const goHomeBtn = () => navigate("/");
  return (
    <div className="card">
      <button className="back" onClick={() => goHomeBtn()}>
        ⟵ Back
      </button>

      <div className="cardHolder">
        <div>
          <img src={state.flags.png} alt="" />
        </div>
        <div>
          <h1 className="name">{state.name}</h1>
          <div className="textHolder">
            <div>
              <p>Native Name: {state.nativeName}</p>
              <p>Population: {state.population}</p>
              <p>Region: {state.region}</p>
              <p>Sub Region: {state.subregion}</p>
              <p>Capital: {state.capital}</p>
            </div>
            <div>
              <p>Top Level Domain: {state.topLevelDomain}</p>
              <p>Currencies: {state.currencies.map((e) => e.code)}</p>
              <p>Languages: {state.languages.map((r) => `${r.name},`)}</p>
            </div>
          </div>
          <div className="name">
            Border Countries:
            {state.border? state.borders.map(((item,index)=>{
              return <Link className="linkes" to={`../singlecard/${item}`} key={index}>{item}</Link>
            })):(<label>No border</label>)
          }{''}
            
          </div>
        </div>
      </div>
    </div>
  );
}
