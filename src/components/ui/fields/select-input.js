import React from 'react';

const SelectInput = (props) => {
  const elements = props.data.map((item)=>{
    return <option value={item.value} key={item.value}>{item.label}</option>
  });
  return (
    <select
      className="select"
      name="jobTitle"
      value={props.value}
      onChange={props.onChange}>
      {elements}
    </select>
  )
}
export default SelectInput 