import React from "react";

// components
import Like from "../layout/like/like";

const TableMovies = ({ data, onDeleted, onLiked, onSorting }) => {
  const tr = data.map(movie => {
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
        <table className="table table-striped">
          <thead className="thead thead-dark ">
            <tr>
              <th>
                <button
                  onClick={() => onSorting("title")}
                  className="btn btn-link text-light"
                >
                  Title <i className="fas fa-sort-down" />
                </button>
              </th>

              <th>
                <button
                  onClick={() => onSorting("genre.name")}
                  className="btn btn-link text-light px-0"
                >
                  Genre <i className="fas fa-sort-down" />
                </button>
              </th>

              <th>
                <button
                  onClick={() => onSorting("numberInStock")}
                  className="btn btn-link text-light px-0"
                >
                  Stock <i className="fas fa-sort-down" />
                </button>
              </th>

              <th>
                <button
                  onClick={() => onSorting("dailyRentalRate")}
                  className="btn btn-link text-light px-0"
                >
                  Rate <i className="fas fa-sort-down" />
                </button>
              </th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody className="tbody">{tr}</tbody>
        </table>
      )}
    </div>
  );
};

export default TableMovies;
