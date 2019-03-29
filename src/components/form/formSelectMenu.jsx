import React from "react";

const FormSelectMenu = ({ name, options, label, ...rest }) => {
  const renderGenres = options.map(item => {
    const { _id, name } = item;
    return (
      <option key={_id} value={_id}>
        {name}
      </option>
    );
  });
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="custom-select">
        <option value="" />
        {renderGenres}
      </select>
    </div>
  );
};

export default FormSelectMenu;
