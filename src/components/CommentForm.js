import React from "react";

var myFormStyles = {
  paddingTop: "10px",
  paddingBottom: "10px"
};
const CommentForm = () => {
  return (
    <div className="container" style={myFormStyles}>
      <form>
        <input type="text" placeholder="Name" className="form-control" />
        <textarea
          width="50col"
          placeholder="Type your comment"
          className="form-control"
        />
        <button className="btn btn-primary" type="submit">
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
