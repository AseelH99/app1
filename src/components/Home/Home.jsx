import React from 'react'
import style from './Home.module.css'
export default function Home() {
  return (
    <div>
      <div className={`${style.header} vh-100 `}>
       <div className="d-flex justify-content-center align-items-center vh-100">
       <div className="header-content text-white">
        <h1>Welcome to Luxury Beauty</h1>
       </div>
       </div>
      </div>

      
      <div className="container mt-5 pt-5">
       <div className="row mt-5">
        <div className="col-md-3 text-center ">
         <img  src="/assets/img/mascra.png" alt="mascara" />
         <p>MASCARA</p>
        </div>
        <div className="col-md-3 text-center  ">
         <img  src="/assets/img/blush.jpg" alt="mascara" />
         <p>BLUSH</p>
        </div>
        <div className="col-md-3 text-center ">
         <img  src="/assets/img/eye.webp" alt="mascara" />
         <p>EYE BROW</p>
        </div>
        <div className="col-md-3 text-center ">
         <img  src="/assets/img/eyeliner.jpg" alt="mascara" />
         <p>EYE LINER</p>
        </div>
       </div>
       <div className="row mt-5">
        <div className="col-md-3 text-center ">
         <img  src="/assets/img/nyx-pro-makeup-matte-bronzer.webp" alt="mascara" />
         <p>BROZER</p>
        </div>
        <div className="col-md-3 text-center  ">
         <img  src="/assets/img/found.webp" alt="mascara" />
         <p>FOUNDATION</p>
        </div>
        <div className="col-md-3 text-center ">
         <img  src="/assets/img/lipliner.jpg" alt="mascara" />
         <p>LIP LINER</p>
        </div>
        <div className="col-md-3 text-center ">
         <img  src="/assets/img/lipstick.jpg" alt="mascara" />
         <p>LIP STICK</p>
        </div>
       </div>
      </div>
    </div>
  )
} 
