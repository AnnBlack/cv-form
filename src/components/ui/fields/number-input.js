import React, { Component } from 'react';

const NumberInput = (props) => {
  const onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    props.onChange(fieldName, fieldValue);
  }
  return <input
    type="number"
    placeholder={props.placeholder}
    className={props.className}
    name="number"
    value={props.value}
    onChange={onFieldChange}
  />
}
export default NumberInput;