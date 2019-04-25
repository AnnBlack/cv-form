import React, { Component } from 'react';

const TextInput = (props) => {
  const onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    props.onChange(fieldName, fieldValue);
  }
  return (
    <input
      type="text"
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      className={props.className}
      onChange={onFieldChange}
    />
  )
}
export default TextInput