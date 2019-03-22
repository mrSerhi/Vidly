import React, { Component } from "react";
import "./App.css";
import uuid from "uuid";
// fake API
import { getMovies, deleteMovie } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";
// utils for create pagination
import { createPagination } from "./utils/forPagination";

// components
import Spinner from "./components/layout/spinner/spinner";
import TableMovies from "./components/tableMovies/tableMovies";
import TitleMovies from "./components/titleMovies/titleMovies";
import Pagination from "./components/layout/pagination/pagination";
import Sidebar from "./components/layout/sidebar";

class App extends Component {
  state = {
    movies: [],
    loaded: false,
    contentPerPage: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: "AllGenres"
  };

  componentDidMount() {
    localStorage.setItem("movies", JSON.stringify(getMovies()));
    setTimeout(() => {
      this.setState({
        movies: JSON.parse(localStorage.getItem("movies")),
        loaded: true,
        genres: [{ _id: uuid, name: "AllGenres", active: true }, ...getGenres()]
      });
    }, 1000);
    // this.setState({ movies: getMovies(), loaded: true });
  }

  componentDidUpdate() {
    const { movies } = this.state;
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  handleDeleteClick = id => {
    const movies = [...this.state.movies];
    const filter = movies.filter(m => m._id !== id);
    this.setState({ movies: filter });
    deleteMovie(id);
  };

  handleLikedToggle = id => {
    this.setState(state => {
      const shallCopy = [...state.movies];
      const index = shallCopy.findIndex(m => m._id === id);
      shallCopy[index] = { ...shallCopy[index] };
      shallCopy[index].liked = !shallCopy[index].liked;

      return { movies: shallCopy };
    });
    const dataAPI = getMovies();
    dataAPI.forEach(item => {
      if (item._id === id) item.liked = !item.liked;
    });
  };

  handlePaginationClick = (e, page) => {
    e.preventDefault();
    this.setState({ currentPage: page });
  };

  handleGenresSelect = (e, genre) => {
    e.preventDefault();
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  displayMoviesOnGenres = () => {
    const { selectedGenre: genre, movies } = this.state;

    if (genre !== "AllGenres") {
      return movies.filter(m => m.genre.name === genre);
    }
    return movies;
  };

  displayTable = () => {
    const {
      // movies: content,
      loaded,
      contentPerPage,
      currentPage,
      genres
    } = this.state;
    // const { length } = content;

    const moviesOnGenre = this.displayMoviesOnGenres();
    const movies = createPagination(moviesOnGenre, currentPage, contentPerPage);

    if (loaded) {
      return (
        <React.Fragment>
          <TitleMovies length={moviesOnGenre.length} />

          <Sidebar genres={genres} onGenreDisplay={this.handleGenresSelect} />

          <TableMovies
            data={movies}
            onDeleted={this.handleDeleteClick}
            onLiked={this.handleLikedToggle}
          />

          <Pagination
            itemsLength={moviesOnGenre.length}
            itemsPerPage={contentPerPage}
            currentPage={currentPage}
            onChangePagination={this.handlePaginationClick}
          />
        </React.Fragment>
      );
    }
    return <Spinner />;
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.displayTable()}</div>
      </div>
    );
  }
}

export default App;
