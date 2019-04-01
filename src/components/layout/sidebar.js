import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidebar = ({ genres, selectedItem, onGenreDisplay }) => {
  const renderGenres = genres.map(g => {
    const { _id: id, name: genre } = g;
    const itemClasses = "list-group-item list-group-item-action ";
    const hightlight =
      selectedItem === genre ? itemClasses + "active" : itemClasses;
    return (
      <a
        onClick={e => onGenreDisplay(e, genre)}
        href="#!"
        key={id}
        className={hightlight}
      >
        {genre}
      </a>
    );
  });
  // d-flex flex-row justify-content-between align-items-center mb-1 mx-auto
  return (
    <div className="col-md-10 sidebar">
      <ul className="list-group list-group-horizontal">{renderGenres}</ul>

      <Link to="/movie/add" className="btn btn-outline-primary">
        Add Movie
      </Link>
    </div>
  );
};

Sidebar.propTypes = {
  genres: PropTypes.array.isRequired,
  onGenreDisplay: PropTypes.func.isRequired,
  selectedItem: PropTypes.string
};

export default Sidebar;
