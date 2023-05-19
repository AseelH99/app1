import React, { Component } from 'react'
import Course from './Course'

export default class Courses extends Component {
    state={
      courses:[
        {
            id:1,
            title:'java',
            price:100,
        },
        {
            id:2,
            title:'React',
            price:100,
        },
        {
            id:3,
            title:'React Native',
            price:100,
        },
      ]
    }
  render() {
    return (
      <div>
       
       <div className="container">
        <div className="row">
            {
                  this.state.courses.map((ele)=>{
                    return <Course name={ele.title} price={ele.price} />
                })
            }
        </div>
       </div>
      </div>
    )
  }
}
