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
    <div className="TopHeader">
     <p>Where in the world?</p>
     <button>Dark Mode</button>
    <Outlet />
    </div>
  )
}
