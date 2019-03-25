import React, { Component } from "react";
import FormGroup from "./formGroup";

class LoginForm extends Component {
  state = {
    name: "",
    email: "",
    errors: {}
  };

  validation = () => {
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

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmitForm = e => {
    e.preventDefault();

    // some validation
    const inValid = this.validation();
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
                />

                <FormGroup
                  label="Email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  error={emailMessage}
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
