import React,{useState,useEffect} from 'react';
import { Outlet,NavLink } from 'react-router-dom';
import '../Styles/header.scss';
import '../Styles/darkMode.scss';


export default function Header() {
  const[darkMode,setDarkMode] =useState(false);
  return (
    <>
    <div className={darkMode? 'TopHeader darkMode':'TopHeader lightMode'}>
     <h3>Where in the world?</h3>
     <p onClick={()=>setDarkMode(!(darkMode))}>{darkMode? "Dark Mode" : "Light Mode"}</p>
    </div>
    <div className={darkMode? 'darkMode':'lightMode'}>
    <Outlet />
    </div>
    </>
  )
}
