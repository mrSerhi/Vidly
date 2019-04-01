import React from "react";
import PropTypes from "prop-types";

const Like = ({ liked, onLiked }) => {
  const likeHeart = liked ? "fas fa-heart" : "far fa-heart";
  return (
    <button onClick={onLiked} className="btn btn-link text-dark">
      <i className={likeHeart} />
    </button>
  );
};

Like.propTypes = {
  liked: PropTypes.bool.isRequired,
  onLiked: PropTypes.func.isRequired
};

export default Like;
