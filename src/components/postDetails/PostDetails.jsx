import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { body, id } = postDetails;

  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <div className="mx-auto pt-5 mt-5 w-50">
      <dir>Post ID : {id}</dir>
      <div>{body}</div>
      <button onClick={goBackHandler} className="btn btn-primary w-100 mt-3">
        go back
      </button>
    </div>
  );
};

export default PostDetails;
