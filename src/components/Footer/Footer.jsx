import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import './Footer.module.css'
export default function Footer() {
  return (
    
     <div className='bg-dark p-5 '>
      <div className="container ">
        <div className="row ">
          <div className="d-flex justify-content-around text-white align-items-center ">
          <div className={`${style.copy}`}>© 2018 Qode Interactive, All Rights Reserved</div>
          <div class=" text-white align-items-center">
            <div class="d-flex flex-row justify-content-end pt-2">
              <Link><i class="fa-brands fa-instagram px-3 text-white"></i></Link>
              <Link><i class="fa-brands fa-twitter px-3 text-white"></i></Link>
              <Link><i class="fa-brands fa-facebook-f px-3 text-white"></i></Link>
              <Link><i class="fa-solid fa-t px-3 text-white"></i></Link>
             <Link> <i class="fa-brands fa-vimeo-v px-3 text-white"></i></Link>
            </div>
          </div>
          </div>
        
        </div>
      </div>
    </div>

  )
}
