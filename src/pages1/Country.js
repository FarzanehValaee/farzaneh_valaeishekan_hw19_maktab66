import React,{useState,useEffect} from 'react';
import { useNavigate,useLocation} from "react-router-dom";
import '../Styles/country.scss';

export default function Country() {
  const  countryInfo =  useLocation();
  const currentCountry=countryInfo.state.data
  console.log(currentCountry)
  let Back=useNavigate();

  return (
    <div className="countryPage">
    <button
      onClick={() =>{
        Back("/");
      }
      }
    >
      back
    </button>
    <div className="country">
      <img src={currentCountry?.flags["png"]} alt={currentCountry["name"]}/>
                <div className="countryInfo">
                <h2>{currentCountry?.name}</h2>
                  <p>Native Name:<span className="tag">{currentCountry.nativeName}</span></p>
                  <p>Top Level Domain:<span className="tag">{currentCountry.topLevelDomain}</span></p>
                  <p>Population:<span className="tag">{currentCountry.population}</span></p>
                  <p>Currencies:
                    <span className="tag">
                    {currentCountry.currencies?.map((currency)=>{
                          return <span className="tagItems">{currency.name}</span>
                        })
                        }
                    </span>
                  </p>
                  <p>Region:<span className="tag">{currentCountry.region}</span></p>
                  <p>Languages:
                    <span className="tag">
                      {currentCountry.languages?.map((languege)=>{
                          return <span className="tagItems">{languege.name}</span>
                        })}</span>
                      </p>
                  <p>Sub Region:
                    <span className="tag">
                      {
                        currentCountry.subregion
                      }
                    </span></p>
                  <p>Capital:<span className="tag">{currentCountry.capital}</span></p>
                </div>
    </div>
    </div>
  )
}
