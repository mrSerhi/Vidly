import React from "react";

// components
import Like from "../like/like";

const TableMovies = ({ data, onDeleted, onLiked }) => {
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
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
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
