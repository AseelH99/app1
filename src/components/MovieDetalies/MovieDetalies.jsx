import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetalies.module.css'
import Header from '../Header/Header';

export default function MovieDetalies() {
    let {id}=useParams();
    let [movie,setMovie]=useState({});
    async function getMovie(){
        let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=01b2e0cac26308c5e7b9b6e7ea2667b2`)
        setMovie(data)
    }
    useEffect(()=>{
       getMovie()
    },[])
  return (

    
    <div>
        <Header 
        title='Watch the movie and enjoy your time'
        desc=''
        height='50'
        >
        </Header>
        <div className="container">
          <div className="row text-center">
            {
                <div className="col-md-6 text-center ">
                 <img className='w-50 mt-5 mb-2' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                 <button className='btn btn-primary mb-5  py-3 px-5 bg-dark'>
                    Watch and Downloade Movie
                 </button>
                </div>
                 
            }
            {
                <div className="col-md-6 mt-5 py-2">
                    <table class="table table-bordered w-100">
  
                   <tbody>
                  <tr>
                   <th scope="row">Title</th>
                   
                   <td >{movie.title}</td>
                  </tr>
                  <tr>
                   <th scope="row">Overview</th>
                   <td>{movie.overview}</td>
                  </tr>
                  <tr>
                   <th scope="row">Language</th>
                   <td>{movie.original_language}</td>
                  </tr>
                  <tr>
                   <th scope="row">Release date</th>
                   <td>{movie.release_date}</td>
                  </tr>
                  <tr>
                   <th scope="row">Vote Average</th>
                   <td>{movie.vote_average}</td>
                  </tr>
                  <tr>
                   <th scope="row">Vote Count</th>
                   <td>{movie.vote_count}</td>
                  </tr>
                   </tbody>
                   </table>
                </div>
            }
           
          </div>
        </div>
        </div>
  )
}
