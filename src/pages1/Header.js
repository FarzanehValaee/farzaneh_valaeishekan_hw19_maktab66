import React,{useState,useEffect} from 'react';
import { Outlet,NavLink } from 'react-router-dom'

export default function Header() {
          const[region,setRegion] =useState([]);
          useEffect(() => {
                    fetch("https://restcountries.com/v2/all")
                    .then((data) => data.json())
                    .then((res)=> setRegion(res))
            },[])

  return (
    <>
    <div className="header">
            <input type="text" name="search" placeholder="Search for a country..."/>
            <select name="Filter by Region">
                {         
                    region?.map((country) =>{
                              return(
                                        <option value={country.region}>{country.region}</option>
                              )
                }    
          )}
           </select>
    </div>
    <Outlet />
    </>
  )
}
