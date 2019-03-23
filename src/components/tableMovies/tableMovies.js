import React from "react";

// components
import Like from "../layout/like/like";
import TableHeader from "./tableHeader";

const TableMovies = ({ data, orderedItems, onDeleted, onLiked, onSorting }) => {
  const _path = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];
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
          <TableHeader
            orderedItems={orderedItems}
            columnsPath={_path}
            onSorting={onSorting}
          />
          <tbody className="tbody">{RenderColumns}</tbody>
        </table>
      )}
    </div>
  );
};

export default TableMovies;
