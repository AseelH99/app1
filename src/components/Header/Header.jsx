import React from 'react'
import'../Header/Header.css'
export default function Header({title,desc,height}) {
  return (
    <div>
        <div className="header" style={{height:height+"vh"}}>
        <div className="d-flex justify-content-center align-items-center text-center"style={{height:height+"vh"}}>
       <div className="header-content text-white mt-5">
        <h1>{title}</h1>
        <p className='text-capitalize'>{desc} </p>
       </div>
       </div>
        </div>
    </div>
  )
}
