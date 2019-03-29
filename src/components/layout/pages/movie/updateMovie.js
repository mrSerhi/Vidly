import React from "react";
import BackLink from "../../backWay/backLink";

// for validate
import Joi from "joi-browser";

// fake API
import { getMovie, saveMovie } from "../../../../services/fakeMovieService";
import { getGenres } from "../../../../services/fakeGenreService";

// components
import Form from "../../../form/form";

class UpdateMovie extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      stock: "",
      rate: ""
    },
    genres: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string().label("Genre"),
    stock: Joi.number()
      .min(0)
      .max(100)
      .label("Number in stock"),
    rate: Joi.number()
      .min(0)
      .max(10)
      .label("Rate")
  };
  // emulate UPDATE request to the server
  // workWithData = () => {
  //   const { selectMovieID, data } = this.state;
  //   const { genre, ...movie } = data;
  //   movie._id = selectMovieID;
  //   movie.genre = getGenres().filter(g => g._id === genre)[0]; // return first object from array
  //   saveMovie(movie);
  // };

  workWithData = () => {
    const { data: movie, genres } = this.state;
    movie.genre = genres.filter(g => g._id === movie.genre)[0];
    saveMovie(movie);
  };

  componentDidMount() {
    const { match, history } = this.props;
    const currMovieID = match.params.id;
    // get current movie
    const movie = getMovie(currMovieID);
    if (!movie) return history.replace("/not_found");

    const { _id, title, genre, numberInStock, dailyRentalRate } = movie;
    const data = { ...this.state.data };

    data._id = _id;
    data.title = title;
    data.genre = genre._id;
    data.stock = numberInStock;
    data.rate = dailyRentalRate;

    this.setState({
      data,
      // selectMovieID: _id,
      genres: getGenres()
    });
  }

  render() {
    const { genres } = this.state;

    return (
      <React.Fragment>
        <BackLink />
        <div className="col-md-6 mx-auto">
          <div className="card bg-dark text-light border-danger">
            <h5 className="card-header bg-danger">Update Movie</h5>
            <div className="card-body">
              <form onSubmit={this.handleSubmitForm} className="form">
                {this.renderInput("title", "Title", true)}
                {this.renderCustomSelectMenu("genre", genres, "Genre")}
                {this.renderInput("stock", "Number in stock", true)}
                {this.renderInput("rate", "Rate", true)}
                {this.renderSubmit("Update...", "btn-warning")}
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateMovie;
