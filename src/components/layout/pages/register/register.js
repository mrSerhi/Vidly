import React from "react";
import Joi from "joi-browser";
// components
import Form from "../../../form/form";

class Register extends Form {
  state = {
    data: { name: "", password: "", email: "" },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(10)
      .label("userName"),
    password: Joi.string()
      .min(5)
      .max(20)
      .label("Password"),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .label("Email")
  };

  // call server or/and API when submiting form
  workWithData = () => alert("Do some with the server");

  render() {
    return (
      <div className="col-sm-6 mx-auto">
        <div className="card">
          <h4 className="card-header bg-success text-light">Register</h4>
          <div className="card-body">
            <form onSubmit={this.handleSubmitForm} className="form">
              {this.renderInput("name", "Username", true)}
              {this.renderInput("email", "Email", true)}
              {this.renderInput("password", "Password", true, "password")}
              {this.renderSubmit("Register", "btn-success")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
