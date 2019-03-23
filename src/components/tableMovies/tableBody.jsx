import React from "react";
import PropTypes from "prop-types";
// components
import Like from "../layout/like/like";

const TableBody = ({ data, onDeleted, onLiked }) => {
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

  return <tbody className="tbody">{RenderColumns}</tbody>;
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onLiked: PropTypes.func.isRequired
};

export default TableBody;
