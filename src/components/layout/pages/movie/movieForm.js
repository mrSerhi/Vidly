import React, { Component } from "react";
import BackLink from "../../backWay/backLink";

class MovieForm extends Component {
  state = {};

  handleSubmitMovie = e => {
    e.preventDefault();

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="row">
        <BackLink />

        <div className="col-md-6">
          <p className="lead">
            <span className="text-danger">Movie ID:</span>{" "}
            <span className="text-muted">{this.props.match.params.id}</span>
          </p>
        </div>

        <div className="col-md-6 mx-auto mt-5">
          <div className="card card-body py-5">
            <form onSubmit={this.handleSubmitMovie} className="form">
              <div className="form-group">
                <label htmlFor="movie-title">Title:</label>
                <input
                  className="form-control"
                  type="text"
                  name="movie-title"
                  id="movie-title"
                  placeholder="Type a movie title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="movie-genre">Genre:</label>
                <input
                  className="form-control"
                  type="text"
                  name="movie-genre"
                  id="movie-genre"
                  placeholder="Type a movie genre"
                />
              </div>

              <input
                className="btn btn-outline-primary btn-block"
                type="submit"
                value="Ok"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieForm;
