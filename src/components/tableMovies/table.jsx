import React from "react";

// components
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ data, orderedItems, path, onSorting, onDeleted, onLiked }) => {
  return (
    <table className="table table-responsive-sm table-striped">
      <TableHeader
        orderedItems={orderedItems}
        columnsPath={path}
        onSorting={onSorting}
      />
      <TableBody data={data} onDeleted={onDeleted} onLiked={onLiked} />
    </table>
  );
};

export default Table;
