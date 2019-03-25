import React from "react";

const FormGroup = ({ label, name, value, onChange, error, type = "text" }) => {
  const errorMessage = <div className="invalid-feedback">{error}</div>;
  const inputValidClases = error ? "form-control is-invalid" : "form-control";

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className={inputValidClases}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
      />
      {error && errorMessage}
    </div>
  );
};

export default FormGroup;
