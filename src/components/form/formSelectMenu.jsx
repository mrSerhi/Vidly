import React from "react";

const FormSelectMenu = ({ name, content, onChange, label }) => {
  const renderGenres = content.map(item => {
    // const { _id, name } = genre;
    return (
      <option key={item._id} value={item._id}>
        {item.name}
      </option>
    );
  });
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        onChange={onChange}
        className="custom-select"
        // value={content.filter(item => item._id === value._id)}
      >
        <option> {""} </option>

        {content.length > 0 && renderGenres}
      </select>
    </div>
  );
};

export default FormSelectMenu;
