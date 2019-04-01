import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = { value: this.props.initQuery };

  handleChange = e => {
    this.setState({ value: e.target.value });

    this.props.onSearch(e.target.value);
  };
  render() {
    return (
      <div className="col-md-6 mx-auto ">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text text-light bg-dark">Search</span>
          </div>

          <input
            onChange={this.handleChange}
            value={this.props.initQuery}
            name="search"
            type="text"
            className="form-control"
            placeholder="Type a movie name..."
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  initQuery: PropTypes.string
};

export default Search;
