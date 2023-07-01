import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { logSchema } from '../Schemas/log'
import { useNavigate, useNavigation } from 'react-router-dom'
import Header from '../Header/Header'
import  './Login.module.css'
import style from './Login.module.css'

export default function Login({getUser}) {
  let [error,setError]=useState([])
  let navigate=useNavigate()
  let {errors,values,handleChange,handleSubmit,touched,handleBlur} = useFormik({
    initialValues:{
      email:"",
      password:"",
    },validationSchema:logSchema,
      onSubmit:register
  })
   async function register(values){
    console.log(values)
     let {data}=await axios.post('https://king-prawn-app-3mgea.ondigitalocean.app/auth/login',values)
     console.log(data);
    if(data.message==="Done"){
      console.log("success")
      localStorage.setItem('token',data.access_token)
      getUser()
      navigate('/home')
    }else{
      console.log("error")
      setError(data.err[0])
    }
  }
  return (
    <> 
    <Header
     title='Log In Now '
     desc=''
     height='50'
    >

    </Header>
   <div className="container mt-5 pt-5">
    <div className="w-50 m-auto text-center">
    {error.map((err)=>{
      return <div className='alert alert-danger'>{err.message} </div>
    })}
    </div>
   
    <form className='w-50 m-auto text-center' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className={`form-control ${errors.email && touched.email?"is-invalid":" "}`}
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      name="email" 
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
    />
      {errors.email && touched.email?<div className="small text-danger">{errors.email}</div>:<></>}   
    </div>
   
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className={`form-control ${errors.password && touched.password?"is-invalid":" "}`}
      id="exampleInputPassword1"
      name="password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.password && touched.password?<div className="small text-danger">Ensure password has two uppercase letters,one special case letter,two digits,three lowercase letters and more than 8 letters </div>:<></>}
  </div>
  
  <button type="submit" className={`${style.logbtn} btn btn-primary mb-5 py-2 px-5 bg-dark`}>
    Log In
  </button>
</form>

   </div>
   </>
  )
}
