import React from "react";

const TitleMovies = ({ length }) => {
  const title =
    length > 0 ? (
      <h3 className="text-center">
        In the Database we are haves{" "}
        <span className="badge badge-success">{length}</span> movies
      </h3>
    ) : (
      <h3 className="text-warning">
        Don't exist the movies in our database...
      </h3>
    );
  return <div className="col-md-8 mx-auto">{title}</div>;
};

export default TitleMovies;
