import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { regSchema } from '../Schemas/register'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'

export default function Register() {
  let navigate=useNavigate()
  let [error,setError]=useState([])
  let {errors,values,handleChange,handleSubmit,touched,handleBlur} = useFormik({
    initialValues:{
      email:"",
      userName:"",
      password:"",
      cPassword:""
    },validationSchema:regSchema,
      onSubmit:register
  })
   async function register(values){
    console.log('hhhh')
    let {data}=await axios.post('https://king-prawn-app-3mgea.ondigitalocean.app/auth/signup',values)
    console.log(data);
    if(data.message==="Done"){
      console.log("Done")
      navigate('/login')
    }else{
      
      setError(data.err[0])
      console.log(data.err[0])
    }
  }
  return (
    <>
    <Header
     title="Register Now"
      desc=''
      height='50'
      >

    </Header>
   <div className="container mt-5 pt-5">
    <div className="w-50 m-auto text-center ">
    {error.map((err)=>{
      return <div className='alert alert-danger'>{err.message} </div>
    })}
    </div>
   
    <form className='w-50 m-auto text-center' onSubmit={handleSubmit}>
  <div className="mb-1">
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
    <div className="mb-1">
    <label htmlFor="exampleInputName" className="form-label">
     Name
    </label>
    <input
      type="text"
      className={`form-control ${errors.userName && touched.userName?"is-invalid":" "}`}
      id="exampleInputName"
      aria-describedby="emailHelp"
      name="userName"
      value={values.userName}
      onChange={handleChange}
      onBlur={handleBlur}
    />
   {errors.userName && touched.userName?<div className="small text-danger">{errors.userName}</div>:<></>}
  </div>
  <div className="mb-1">
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
  <div className="mb-2">
    <label htmlFor="exampleInputPassword2" className="form-label">
     Confirm Password
    </label>
    <input
      type="password"
      className={`form-control ${errors.cPassword && touched.cPassword?"is-invalid":" "}`}
      id="exampleInputPassword2"
      name="cPassword"
      value={values.cPassword}
      onChange={handleChange}
      onBlur={handleBlur}
      
    />
    {errors.cPassword && touched.cPassword?<div className="small text-danger">Must match input password</div>:<></>}
  </div>
  <button type="submit" className="btn btn-primary mb-5  py-2 px-5 bg-dark">
    Register
  </button>
</form>

   </div>
   </>
  )
}
