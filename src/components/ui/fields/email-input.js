import React, { Component } from 'react';

export default class EmailInput extends Component {
  onFieldChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }
  render(){
    return <input
      type="email"
      value={this.props.value}
      placeholder={this.props.placeholder}
      className={this.props.className}
      name="email"
      onChange={this.onFieldChange.bind(this)}
    />
  }
}