import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({ genres, onGenreDisplay }) => {
  const renderGenres = genres.map(g => {
    const { _id: id, name: genre, active = false } = g;
    const itemClasses = "list-group-item list-group-item-action ";
    const hightlight = active ? itemClasses + "active" : itemClasses;
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

  return (
    <div className="col-md-6 mx-auto mb-2">
      <ul className="list-group list-group-horizontal">{renderGenres}</ul>
    </div>
  );
};

Sidebar.propTypes = {
  genres: PropTypes.array.isRequired,
  onGenreDisplay: PropTypes.func.isRequired
};

export default Sidebar;
