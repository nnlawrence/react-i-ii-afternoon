import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component{

    render(){
    return (
      <div className="bigbox">
          <button onClick={this.props.handleDecrease}>Previous</button>
          <div>
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
            <button className="btn">New</button>
          </div>
         
          <button onClick={this.props.handleIncrease}>Next</button>
      </div>
    );
  }
}
  
  export default Footer;