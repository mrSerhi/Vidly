import React from "react";

// components
import Like from "../layout/like/like";

const TableMovies = ({ data, orderedItems, onDeleted, onLiked, onSorting }) => {
  const sorting = path => {
    // 1. clone ordered state obj from props
    const ordered = { ...orderedItems };
    // 2. Check if path equal ordered.path for reverse sorting and change on 'desc' or set previous
    if (ordered.path === path) {
      ordered.order = ordered.order === "asc" ? "desc" : "asc";
    } else {
      ordered.path = path;
      ordered.order = "asc";
    }
    onSorting(ordered); // return ordered object
  };

  const RenderColumns = data.map(movie => {
    const {
      _id,
      title,
      genre: { name },
      numberInStock: stock,
      dailyRentalRate: rate,
      liked
    } = movie;

    return (
      <tr key={_id}>
        <td>{title}</td>
        <td>{name}</td>
        <td>{stock}</td>
        <td>{rate}</td>
        <td>
          <Like onLiked={() => onLiked(_id)} liked={liked} />
        </td>
        <td>
          <button
            onClick={() => onDeleted(_id)}
            className="btn btn-danger btn-sm"
          >
            <i className="fas fa-trash" />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="col-md-10 mx-auto">
      {data.length !== 0 && (
        <table className="table table-responsive-sm table-striped">
          <thead className="thead thead-dark ">
            <tr>
              <th>
                <button
                  onClick={() => sorting("title")}
                  className="btn btn-link text-light"
                >
                  Title <i className="fas fa-sort-down" />
                </button>
              </th>

              <th>
                <button
                  onClick={() => sorting("genre.name")}
                  className="btn btn-link text-light px-0"
                >
                  Genre <i className="fas fa-sort-down" />
                </button>
              </th>

              <th>
                <button
                  onClick={() => sorting("numberInStock")}
                  className="btn btn-link text-light px-0"
                >
                  Stock <i className="fas fa-sort-down" />
                </button>
              </th>

              <th>
                <button
                  onClick={() => sorting("dailyRentalRate")}
                  className="btn btn-link text-light px-0"
                >
                  Rate <i className="fas fa-sort-down" />
                </button>
              </th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody className="tbody">{RenderColumns}</tbody>
        </table>
      )}
    </div>
  );
};

export default TableMovies;
