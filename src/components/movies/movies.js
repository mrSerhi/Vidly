import React, { Component } from "react";
import uuid from "uuid";
import _ from "lodash";
// fake API
import { getMovies, deleteMovie } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
// utils for create pagination
import { createPagination } from "../../utils/forPagination";

// components
import Spinner from "../layout/spinner/spinner";
import TableMovies from "../tableMovies/tableMovies";
import TitleMovies from "../titleMovies/titleMovies";
import Pagination from "../layout/pagination/pagination";
import Sidebar from "../layout/sidebar";

class Movies extends Component {
  state = {
    movies: [],
    loaded: false,
    contentPerPage: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: "AllGenres",
    ordered: { path: "title", order: "asc" }
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

  handleSortingData = ordered => {
    this.setState({ ordered });
  };

  filteringMoviesOnGenres = () => {
    const { selectedGenre: genre, movies } = this.state;

    if (genre !== "AllGenres") {
      return movies.filter(m => m.genre.name === genre);
    }
    return movies;
  };

  renderContent = () => {
    const {
      loaded,
      contentPerPage,
      currentPage,
      genres,
      selectedGenre,
      ordered: { path, order }
    } = this.state;

    // filtering by genre
    const moviesOnGenre = this.filteringMoviesOnGenres();
    // sorting by order
    const sortingMoviesByOrder = _.orderBy(moviesOnGenre, [path], [order]);
    // pagination
    const movies = createPagination(
      sortingMoviesByOrder,
      currentPage,
      contentPerPage
    );

    if (loaded) {
      return (
        <React.Fragment>
          <TitleMovies length={moviesOnGenre.length} />

          <Sidebar
            genres={genres}
            selectedItem={selectedGenre}
            onGenreDisplay={this.handleGenresSelect}
          />

          <TableMovies
            data={movies}
            orderedItems={this.state.ordered}
            onDeleted={this.handleDeleteClick}
            onLiked={this.handleLikedToggle}
            onSorting={this.handleSortingData}
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
    return <div className="row">{this.renderContent()}</div>;
  }
}

export default Movies;
