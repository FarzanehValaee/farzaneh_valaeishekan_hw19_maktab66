import React,{useState,useEffect} from 'react';
import { Outlet,Link } from 'react-router-dom';
import '../Styles/posts.scss';


export default function Posts() {
          const[posts,setPosts] =useState([]);
          const[searchTerm,setSearchTerm] =useState('');
          let regions=[];
          let items=posts
          useEffect(() => {
                    fetch("https://restcountries.com/v2/all")
                    .then((data) => data.json())
                    .then((res)=> setPosts(res))
            },[])
            posts?.map((post) =>{
                 if(!(regions.includes(post.region))){
                  regions.push(post.region)
                 }
            })
            function filterRegions(region){
                     items = posts.filter(country => country.region === region);
                     setPosts(items)
              } 

  return (
     <>
         <div className="header">
            <input type="text" name="search" placeholder="Search for a country..." onChange={event=>setSearchTerm(event.target.value)} />
            <select name="Filter by Region" onChange={event=>filterRegions(event.target.value)}>
                {         
                    regions?.map((region) =>{
                              return(
                                        <option value={region}>{region}</option>
                              )
                }    
          )}
           </select>
         </div>
    <div className="content">
              {posts?.filter((val) =>{
                 if(searchTerm==""){
                   return val
                 }
                 else if(val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                   return val
                 }
              }).map((post) =>{
                       return(
                          <Link
                          to={`/posts/${post.name}`}
                          state ={
                            {
                              from:"posts",
                              data: post
                            }
                          }
                          >
                          <div className="postItem" key={post.numericCode}>
                                 <img src={post.flags.png} alt={post.name}/>
                                 <div className="information">
                                    <h4>{post.name}</h4>
                                    <p>Population:<span className="tag">{post.population}</span></p>
                                    <p>Region:<span className="tag">{post.region}</span></p>
                                    <p>Capital:<span className="tag">{post.capital}</span></p>
                                 </div>
                          </div>
                         </Link>

                       ) 
              }
              )}
    </div>
    </>
  )
}
