import React from "react";
// fake API
import { saveMovie } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";

// for validation rules
import Joi from "joi-browser";

// components
import Form from "../form/form";

class AddMovie extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      stock: "",
      rate: ""
    },
    errors: {}
  };

  schema = {
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
  // emulate POST request to the server and save the new movie to database
  workWithData = () => saveMovie(this.state.data);

  render() {
    const genres = getGenres();
    return (
      <div className="col-sm-6 mx-auto">
        <form onSubmit={this.handleSubmitForm} className="form">
          {this.renderInput("title", "Title", true)}
          {this.renderCustomSelectMenu("genre", genres, "Genre")}
          {this.renderInput("stock", "Number in stock", true)}
          {this.renderInput("rate", "Rate", true)}
          {this.renderSubmit("Add", "btn-dark")}
        </form>
      </div>
    );
  }
}

export default AddMovie;
