import React, { Component } from "react";
import FormGroup from "./formGroup";

class LoginForm extends Component {
  state = {
    name: "",
    email: "",
    errors: {}
  };

  validationOnSubmit = () => {
    const { name, email } = this.state;
    let errors = {};

    if (name.trim() === "") {
      errors.name = "Please, type your name...";
    } else if (!isNaN(name)) {
      errors.name = "Name isn't a string! Please, retry... ";
    }

    if (email.trim() === "") {
      errors.email = "Please, type your email address...";
    }

    return Object.keys(errors).length === 0 ? null : errors;
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
    // set errors
    this.setState({ errors: inValid });
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
                  error={nameMessage}
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
