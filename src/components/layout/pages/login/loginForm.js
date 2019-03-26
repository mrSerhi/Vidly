import React, { Component } from "react";
import Joi from "joi-browser";
import FormGroup from "./formGroup";

class LoginForm extends Component {
  state = {
    name: "",
    email: "",
    errors: {}
  };

  // obj with rules for Joi validation
  schema = {
    name: Joi.string().required(),
    email: Joi.string().email({ minDomainAtoms: 2 })
  };

  validationOnSubmit = () => {
    const { name, email } = this.state;
    // abortEarly === false - is prevent aborting on first finded error and stoped
    const options = { abortEarly: false };
    // get error obj from returns Joi validation responce
    const { error } = Joi.validate({ name, email }, this.schema, options);

    if (!error) return null;

    let errors = {};
    // should looping error.details array and set error message on current field name
    // path = current field name (array) -> message = error message (string)
    error.details.forEach(item => (errors[item.path[0]] = item.message));

    return errors;
  };

  validationInputValue = (name, value) => {
    if (name === "name") {
      if (value.trim().length < 3) return "Name must be bigger then 3";
    }
    if (name === "email") {
      if (value.trim().includes("-")) return "Type email without * - *";
    }
  };

  handleChange = ({ target: { name, value } }) => {
    // copy of errors state
    const errors = { ...this.state.errors };
    // valid values on change and save error message
    const inValidMessage = this.validationInputValue(name, value);
    // checking on error message
    if (inValidMessage) {
      errors[name] = inValidMessage;
    } else {
      delete errors[name];
    }

    this.setState({ [name]: value, errors });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    // some validation
    const inValid = this.validationOnSubmit();
    // in the component value must not be a null or undefined!!!
    // For this case we should to replace returns *null* on ampty object
    this.setState({ errors: inValid || {} });
    if (inValid) return;

    alert("Login");

    // clear fields
    this.setState({ name: "", email: "" });
  };

  render() {
    const {
      name,
      email,
      errors: { name: nameMessage, email: emailMessage }
    } = this.state;

    return (
      <div className="container">
        <div className="col-sm-6 mx-auto">
          <div className="card">
            <h4 className="card-header bg-dark text-white">
              <i className="fas fa-unlock" /> Login
            </h4>
            <div className="card-body">
              <form onSubmit={this.handleSubmitForm} className="form">
                <FormGroup
                  label="Name"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  error={nameMessage} // should not be a null or undefined
                  placeholder="Enter your name"
                  required={true}
                />

                <FormGroup
                  label="Email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  error={emailMessage}
                  placeholder="Enter your email"
                  required={true}
                  type="email"
                />

                <input className="btn btn-info" type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
