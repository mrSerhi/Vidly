import React from "react";

const Movie = ({ match }) => {
  return (
    <div>
      <h1 className="display-3 text-warning">movie component</h1>
      <p className="lead">
        <span className="text-danger">Movie ID:</span>{" "}
        <span className="text-muted">{match.params.id}</span>
      </p>
    </div>
  );
};

export default Movie;
