import React, { Component } from 'react';

const EmailInput = (props) => {
  const onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    props.onChange(fieldName, fieldValue);
  }
  return ( 
    <input
      type="email"
      name="email"
      value={props.value}
      placeholder={props.placeholder}
      className={props.className}
      onChange={onFieldChange}
    />
  )
}
export default EmailInput