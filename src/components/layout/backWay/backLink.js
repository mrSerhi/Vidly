import React from "react";
import { Link } from "react-router-dom";

const BackLink = () => {
  return (
    <div className="col-md-6">
      <Link to="/movies">
        <i className="fas fa-arrow-left" /> Back to movies
      </Link>
    </div>
  );
};

export default BackLink;
