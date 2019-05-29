import React from 'react';

const TextInput = (props) => {
  return (
    <input
      type="text"
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.onChange}
    />
  )
}
export default TextInput