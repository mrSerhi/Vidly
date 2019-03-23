import React from "react";
import PropTypes from "prop-types";

// should get:
// onSorting - func
// columns path - arr of obj
// ordered items - obj
const TableHeader = ({ orderedItems, columnsPath, onSorting }) => {
  const sortingItems = path => {
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

  const RenderColumns = () => {
    return columnsPath.map(item => {
      const RenderIcon = () => {
        const { path, order } = orderedItems;

        if (item.path === path && order === "desc") {
          return <i className="fas fa-sort-up" />;
        } else if (item.path === path && order === "asc") {
          return <i className="fas fa-sort-down" />;
        }
        return null;
      };
      return (
        <th key={item.path || item.key}>
          <button
            onClick={() => sortingItems(item.path)}
            className="btn btn-link text-light px-0"
          >
            {item.label} {RenderIcon()}
          </button>
        </th>
      );
    });
  };

  return (
    <thead className="thead thead-dark ">
      <tr>{RenderColumns()}</tr>
    </thead>
  );
};

TableHeader.propTypes = {
  columnsPath: PropTypes.array.isRequired,
  orderedItems: PropTypes.object.isRequired,
  onSorting: PropTypes.func.isRequired
};

export default TableHeader;
