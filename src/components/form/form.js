import React, { Component } from "react";
import Joi from "joi-browser";

// components
import FormGroup from "./formGroup";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validationOnSubmit = () => {
    // abortEarly === false - is prevent aborting on first finded error and stoped
    const options = { abortEarly: false };
    // get error obj from returns Joi validation responce
    // get **data state object to validate
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    let errors = {};
    // should looping error.details array and set error message on current field name
    // path = current field name (array) -> message = error message (string)
    error.details.forEach(item => (errors[item.path[0]] = item.message));

    return errors;
  };

  handleSubmitForm = e => {
    e.preventDefault();

    // some validation
    const inValid = this.validationOnSubmit();
    // in the component value must not be a null or undefined!!!
    // For this case we should to replace returns *null* on ampty object
    this.setState({ errors: inValid || {} });
    if (inValid) return;

    // do some stuff with server and/or API
    this.workWithData();

    // clear fields
    this.setState({ data: { name: "", email: "" } });
  };

  validationOnChange = (name, value) => {
    // create obj for each input use name property
    const inputVal = { [name]: value };
    // create the local schema object with main rules valid for each name input
    const schema = {
      [name]: this.schema[name]
    };
    // not uses options object because we needs aborting on first finded error
    const { error } = Joi.validate(inputVal, schema);

    return error ? error.details[0].message : null;
  };

  handleChange = ({ target: { name, value } }) => {
    // copy of errors state
    const errors = { ...this.state.errors };
    // valid values on change and save error message
    const inValidMessage = this.validationOnChange(name, value);
    // checking on error message
    if (inValidMessage) {
      errors[name] = inValidMessage;
    } else {
      delete errors[name];
    }

    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data, errors });
  };

  // helpfull render fn-s
  renderInput = (name, label, required) => {
    const { data, errors } = this.state;

    return (
      <FormGroup
        label={label}
        name={data[name]}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]} // should not be a null or undefined
        placeholder={`Enter your ${label}`}
        required={required}
      />
    );
  };

  renderSubmit = (label, className = "btn-info") => {
    const allowSubmiting = this.validationOnSubmit(); // return null or object with errors

    return (
      <input
        className={`btn ${className}`}
        type="submit"
        value={label}
        disabled={allowSubmiting}
      />
    );
  };
}

export default Form;
