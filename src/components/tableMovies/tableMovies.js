import React from "react";

// components
import Table from "./table";

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
        <Table
          data={data}
          orderedItems={orderedItems}
          path={_path}
          onLiked={onLiked}
          onDeleted={onDeleted}
          onSorting={onSorting}
        />
      )}
    </div>
  );
};

export default TableMovies;
