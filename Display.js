import React, { Component } from 'react';
import data from '../data'
import './Display.css'

class Display extends Component{
    render(){
    return (
      <div className="display-box"> 
        <h2>{this.props.index +1}/{data.length}</h2>
        <h2>{data[this.props.index].name.first} {data[this.props.index].name.last}</h2>
        <p><b>From: </b>{data[this.props.index].city}, {data[this.props.index].country}</p>
        <p><b>Job Title: </b>{data[this.props.index].employer}</p>
        <p><b>Employer: </b>{data[this.props.index].title}</p>
        <br/>
        <p><b>Favorite Movies:</b></p>
        <ol>
            <li>{data[this.props.index].favoriteMovies[0]}</li>
            <li>{data[this.props.index].favoriteMovies[1]}</li>
            <li>{data[this.props.index].favoriteMovies[2]}</li>
        </ol>

      </div>
    );
  }
}
  
  export default Display;