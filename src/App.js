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
import Movie from "./components/layout/pages/movie/movie";
import NotFound from "./components/layout/pages/notFound/notFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/movie/:id" component={Movie} />
        <Redirect from="/" to="/movies" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
