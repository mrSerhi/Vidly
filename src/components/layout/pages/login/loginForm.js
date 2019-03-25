import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-6 mx-auto">
          <div className="card">
            <h4 className="card-header bg-dark text-white">
              <i className="fas fa-unlock" /> Login
            </h4>
            <div className="card-body">
              <form className="form">
                <div className="form-group">
                  <label htmlFor="login-name">Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="user-name"
                    id="login-name"
                    autoFocus
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="login-email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="user-email"
                    id="login-email"
                    required
                  />
                </div>

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
