import React, { Component } from 'react';
import './style.css';

const Button = ({text}) => {
  return( 
    <button 
      type="submit" 
      className="defaultButton">
      {text}
    </button>
  )
}
export default Button;