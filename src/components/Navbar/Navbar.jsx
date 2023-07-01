import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
export default function Navbar({user,logout}) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark">
  <div className="container">
    <Link className={`${style.navi} navbar-brand text-white fw-bold`} to="#">
    Movie Zone
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className={`${style.navi} nav-item position-relative`}>
          <Link className={`${style.navl} nav-link text-white`}
          aria-current="page" to="home">
            Home
          </Link>
        </li>
         {
         user!==null?
        <> 
        <li className={`${style.navi} nav-item position-relative px-1`}>
          <Link className={`${style.navl} nav-link text-white`} to="popular">
            Popular 
          </Link>
          </li>
          <li className={`${style.navi} nav-item position-relative px-1`}>
          <Link className={`${style.navl} nav-link text-white`} to='top'>
            Top Reated 
          </Link>
          </li> 
          <li className={`${style.navi} nav-item  px-1`}>
          <span className="nav-link text-white" style={{cursor:'pointer'}}
          onClick={()=>logout()}
           >
           LogOut 
          </span> 
        </li> 
       </>:
        <> 
          <li className={`${style.navi} nav-item position-relative px-1`}>
          <Link className={`${style.navl} nav-link text-white`} to="login">
           LogIn
          </Link>
        </li> 
        <li className={`${style.navi} nav-item position-relative px-1`}>
          <Link className={`${style.navl} nav-link text-white`} to="register">
            Register
          </Link>
        </li> 
       </>
        }
         
       
      </ul>
     
    </div>
  </div>
</nav>

  )
}
