import React, { Component } from 'react';

export default class TextInput extends Component {
  onFieldChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }
  render(){
    return <input
      type="text"
      name={this.props.name}
      value={this.props.value}
      placeholder={this.props.placeholder}
      className={this.props.className}
      onChange={this.onFieldChange.bind(this)}
    />
  }
}