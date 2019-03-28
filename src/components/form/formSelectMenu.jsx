import React from "react";

const FormSelectMenu = ({ name, genres, onChange, label }) => {
  const renderGenres = genres.map(genre => {
    const { _id, name } = genre;
    return (
      <option key={_id} value={_id}>
        {name}
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
      >
        <option defaultValue> {""} </option>

        {genres.length > 0 && renderGenres}
      </select>
    </div>
  );
};

export default FormSelectMenu;
