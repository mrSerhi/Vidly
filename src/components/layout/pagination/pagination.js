import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

const Pagination = ({ itemsLength, itemsPerPage }) => {
  const createPagination = (itemsLength, itemsPerPage) => {
    const numOfPages = Math.ceil(itemsLength / itemsPerPage);
    if (numOfPages === 1) return null; // hide pagination if result is a one page
    const pages = [];
    for (let i = 1; i <= numOfPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const paginationItems = () => {
    const pagination = createPagination(itemsLength, itemsPerPage);
    if (pagination !== null) {
      pagination.map(item => {
        return (
          <li key={uuid()} className="page-item">
            <a className="page-link" href="#!">
              {item}
            </a>
          </li>
        );
      });
    }
    return null;
  };
  return (
    <div className="col-md-12 d-flex justify-content-center">
      <ul className="pagination">{paginationItems()}</ul>
    </div>
  );
};

Pagination.propTypes = {
  itemsLength: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired
};

export default Pagination;
