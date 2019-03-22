import React from "react";

const Like = ({ liked, onLiked }) => {
  const likeHeart = liked ? "fas fa-heart" : "far fa-heart";
  return (
    <button onClick={onLiked} className="btn btn-link text-dark">
      <i className={likeHeart} />
    </button>
  );
};

export default Like;
