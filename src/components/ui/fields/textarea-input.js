import React, { Component } from 'react';

const TextArea = (props) => {
  const onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    props.onChange(fieldName, fieldValue);
  }
  return ( 
    <textarea
      name="comments"
      placeholder={props.placeholder}
      value={props.value}
      className={props.className}
      onChange={onFieldChange}
    />
  )
}
export default TextArea;