import React, { Component } from 'react'

export default class Course extends Component {
  render() {
    return (
      
        <div className="col-md-4 bg-dark text-white ">
            <div className="course">
                <h2>{this.props.name}</h2>
                <p>{this.props.price}</p>
            </div>
        </div>
      
    )
  }
}
