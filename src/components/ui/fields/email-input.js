import React from 'react';

const EmailInput = (props) => {
  return ( 
    <input
      type="email"
      name="email"
      value={props.value}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.onChange}
    />
  )
}
export default EmailInput