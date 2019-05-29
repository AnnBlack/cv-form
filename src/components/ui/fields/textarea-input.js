import React from 'react';

const TextArea = (props) => {
  return ( 
    <textarea
      name="comments"
      placeholder={props.placeholder}
      value={props.value}
      className={props.className}
      onChange={props.onChange}
    />
  )
}
export default TextArea;