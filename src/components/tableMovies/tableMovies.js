import React from "react";

// components
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const TableMovies = ({ data, orderedItems, onDeleted, onLiked, onSorting }) => {
  const _path = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];

  return (
    <div className="col-md-10 mx-auto">
      {data.length !== 0 && (
        <table className="table table-responsive-sm table-striped">
          <TableHeader
            orderedItems={orderedItems}
            columnsPath={_path}
            onSorting={onSorting}
          />
          <TableBody data={data} onDeleted={onDeleted} onLiked={onLiked} />
        </table>
      )}
    </div>
  );
};

export default TableMovies;
