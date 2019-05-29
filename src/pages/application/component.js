import React, { Component } from 'react';
import axios from 'axios';
import './style.css'
import TextInput from '../../components/ui/fields/text-input';
import EmailInput from '../../components/ui/fields/email-input';
import NumberInput from '../../components/ui/fields/number-input';
import SelectInput from '../../components/ui/fields/select-input';
import TextArea from '../../components/ui/fields/textarea-input';
import Button from '../../components/ui/button';


const jobsData = [
  {label: 'Frontend Developer', value: 'Frontend Developer'},
  {label: 'BackEnd Developer', value: 'BackEnd Developer'},
  {label: 'QA Engeneer', value: 'QA Engeneer'},
  {label: 'Business Analyst', value: 'Business Analyst'},
  {label: 'UX/UI designer', value: 'UX/UI designer'},
];

const initialState = () => ({
  jobTitle: "",
  name: "",
  lastName: "",
  email: "",
  number: "",
  comments: "",
  link: "",
  nameError: "",
  emailError: "",
  mobileError: "",
  file: null,
  success: false,
});

export default class Application extends Component {
  state = initialState();

  onChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    });
  }

  onFileChange = (e) => {
    this.setState({file:e.target.files[0]})
  }

  validate = () => {
    let nameError = "";
    let emailError = "";
    let mobileError = '';

    if (!this.state.name) {
      nameError = "name is required";
    }

    if(!this.state.number) {
      mobileError = "mobile number is required"
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError || mobileError) {
      this.setState({ emailError, nameError, mobileError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if(isValid) {
      const formData = new FormData();
      const {jobTitle, name, lastName, email, number, comments, link, file} = this.state;
      const payload = {jobTitle, name, lastName, email, number, comments, link, file};
      for(let item in payload) {
        formData.append(item, payload[item])
      }
      axios({
        method: 'post',
        url: '/api/mail',
        config: { headers: {'Content-Type': 'multipart/form-data' }},
        data: formData,
      })
      .then(res => {
        console.log('res', res);
        this.setState({
          ...initialState(),
          file: null,
          success: true
        })
        setTimeout(()=>{
          this.setState({
            success: false
          })
        }, 5000)
      })
      .catch((err)=>{
        console.log('err', err);
      })
    }
  }

  render(){
    const Title = () => { 
      return <h1 className="cv-title">Careers<span>. </span>Send us your CV</h1>
    };

    const Success = () => {
      return <p className="success-message">Thank you! Your CV has been sent</p>
    }

    return(
      <div>
        <Title/>
        { this.state.success ? ( <Success/> ) : null }

        <form className="cv-form" onSubmit={this.handleSubmit}>
          <SelectInput 
            data={jobsData}
            value={this.state.jobTitle}
            onChange={this.onChange}
          />

          <div className="validateField">
            <TextInput 
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              className={this.state.nameError ? 'error' : null}
            />
              { this.state.nameError ? <p className="errorMessage">{this.state.nameError}</p> : null }
          </div>

          <TextInput 
            placeholder="LastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
          />

          <div className="validateField">
            <EmailInput 
              placeholder="Your Email"
              value={this.state.email}
              onChange={this.onChange}
              className={this.state.nameError ? 'error' : null}
            />
            { this.state.emailError ? <p className="errorMessage">{this.state.emailError}</p> : null }
          </div>

          <div className="validateField">
            <NumberInput
              placeholder="Your Mobile Number"
              value={this.state.number}
              onChange={this.onChange}
              className={this.state.mobileError ? 'error lastInput' : 'lastInput'}
            />
            { this.state.mobileError ? <p className="errorMessage">{this.state.mobileError}</p> : null }
          </div>
          <TextArea 
            placeholder="Comments"
            value={this.state.comments}
            onChange={this.onChange}
          />

          <TextInput
            name="link"
            value={this.state.link}
            placeholder="Link to your CV, ex. http://"
            className="input lastInput"
            onChange={this.onChange}
          />

          <input type="file" name="file" onChange={this.onFileChange} className="inputfile" />

          <Button text="Send" type="submit" />
        </form>
      </div>
    )
  }
}