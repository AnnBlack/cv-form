import React, { Component } from 'react';

const SelectInput = (props) => {
  const onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    props.onChange(fieldName, fieldValue);
  }
  const elements = props.data.map((item)=>{
    return <option value={item.value} key={item.value}>{item.label}</option>
  });
  return (
    <select
      className="select"
      name="jobTitle"
      value={props.value}
      onChange={onFieldChange}>
      {elements}
    </select>
  )
}
export default SelectInput 