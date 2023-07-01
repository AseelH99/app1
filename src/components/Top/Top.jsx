
import Header from '../Header/Header'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import style from './Top.module.css'

export default function Top() {
    let [movies,setMovies]=useState([]);
    let getmovies=async()=>{
     let {data}=await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=01b2e0cac26308c5e7b9b6e7ea2667b2");
     setMovies(data.results); 
     }

     useEffect(
        ()=>{
         getmovies();
        },[]);
  return (
    <div>
         <Header
     title="Top Rated Movies "
      desc=''
      height='50'
      >

    </Header>
    { <div className="container">
        <h2 className='mb-3 mt-5'>Movies</h2>
      
        <div className="row">
           {
            
           movies.map((movie,index)=>{
            return <div className='col-md-3 mb-3 text-center' key={index}>
                  <div className={`${style.movie} card  p-2 position-relative`}>
                  <div className={`${style.overlay} d-flex justify-content-center align-items-center `}>
             
                   <Link className={`${style.overlaylink} text-uppercase py-4 px-5 text-decoration-none text-white bg-dark `}
                   to={`/movie/${movie.id}`}>
                     WHATCH NOW
                       </Link>
                       </div>
                   <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                   <h3>{  movie.title?movie.title.split(" ").slice(0,3).join(" "):"" }</h3>
                   <h3>{movie.name? movie.name.split(" ").slice(0,3).join(" "):""}</h3>
                   <div className='text-center  d-flex justify-content-center align-items-center '>
                       <ReactStars
                          count={10}
                          value={movie.vote_average}
                          edit={false}
                           size={24}
                           isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                           halfIcon={<i className="fa fa-star-half-alt"></i>}
                           fullIcon={<i className="fa fa-star"></i>}
                           activeColor="#ffd700"
                              />
                       </div>
                  </div>
            </div>
           })
           }
        </div>
      </div>  }
    </div>
  )
}
