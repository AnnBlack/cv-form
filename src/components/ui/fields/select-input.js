import React, { Component } from 'react';

export default class SelectInput extends Component {
  onFieldChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }
  render(){
    const elements = this.props.data.map((item)=>{
      return <option value={item.value} key={item.value}>{item.label}</option>
    });

    return <select
      className="select"
      name="jobTitle"
      value={this.props.value}
      onChange={this.onFieldChange.bind(this)}>
      {elements}
    </select>
  }
}