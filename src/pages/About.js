import React, { Component } from 'react';
import "./About.css";
import profile_pic from './pic2.jpg';

  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ruphael Getahun</div>
            <div className="brief_description">
            <p> 
          I am a rising Junior at Tufts University studying Economics and Computer Science. Some of my interests include playing basketball and trying new foods. A fun fact about me is that I have a twin sister.</p> 
            </div>
          </div>
        </div>
      </div>
      
         
    )
  }
}