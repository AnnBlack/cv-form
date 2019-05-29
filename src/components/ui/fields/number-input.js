import React from 'react';

const NumberInput = (props) => {
  return (
    <input
      type="number"
      placeholder={props.placeholder}
      className={props.className}
      name="number"
      value={props.value}
      onChange={props.onChange}
    />
  )
}
export default NumberInput;