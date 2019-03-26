import React from "react";
import PropTypes from "prop-types";

const FormGroup = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  required,
  type = "text"
}) => {
  const errorMessage = <div className="invalid-feedback">{error}</div>;
  const inputValidClases = error ? "form-control is-invalid" : "form-control";
  const isRequired = required ? <span className="text-danger">*</span> : null;
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {isRequired}
      </label>
      <input
        className={inputValidClases}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        placeholder={placeholder}
      />
      {error && errorMessage}
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool
};

export default FormGroup;
