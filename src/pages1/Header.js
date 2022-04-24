import React,{useState,useEffect} from 'react';
import { Outlet,NavLink } from 'react-router-dom';
import '../Styles/header.scss';

export default function Header() {
  return (
    <>
    <div className="TopHeader">
     <h3>Where in the world?</h3>
     <p>Dark Mode</p>
    </div>
    <Outlet />
    </>
  )
}
