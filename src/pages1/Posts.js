import React,{useState,useEffect} from 'react';
import { Outlet,Link } from 'react-router-dom';
import '../Styles/posts.scss';


export default function Posts() {
          const[posts,setPosts] =useState([]);
          useEffect(() => {
                    fetch("https://restcountries.com/v2/all")
                    .then((data) => data.json())
                    .then((res)=> setPosts(res))
            },[])

  return (
     <>
    <div className="content">
              {posts?.map((post) =>{
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
