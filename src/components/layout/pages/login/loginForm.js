import React from "react";
import Joi from "joi-browser";

// components
import Form from "../../../form/form"; // inherited class

class LoginForm extends Form {
  state = {
    data: { name: "", email: "" },
    errors: {}
  };

  // obj with main rules for Joi validation
  schema = {
    name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Name"),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .label("Email")
  };

  // call server or/and API when submiting form
  workWithData = () => alert("Do some with the server");

  render() {
    return (
      <div className="container">
        <div className="col-sm-6 mx-auto">
          <div className="card">
            <h4 className="card-header bg-dark text-white">
              <i className="fas fa-unlock" /> Login
            </h4>
            <div className="card-body">
              <form onSubmit={this.handleSubmitForm} className="form">
                {this.renderInput("name", "Username", true)}
                {this.renderInput("email", "Email", true)}
                {this.renderSubmit("Login")}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
