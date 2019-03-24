import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";

// components
import Movies from "./components/movies/movies";
import Customers from "./components/layout/pages/customers/customers";
import Rentals from "./components/layout/pages/rentals/rentals";
import MovieForm from "./components/layout/pages/movie/movieForm";
import NotFound from "./components/layout/pages/notFound/notFound";
import NavBar from "./components/layout/navBar/navBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/movie/:id" component={MovieForm} />
          <Redirect exact from="/" to="/movies" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
