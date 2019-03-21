import React from "react";

const ViewComments = props => {
  // console.log("I am ViewComments pr")
  return (
    <div className="container">
      <ul className="list-group">
        <li className="list-group-item list-group-item-primary">
          Hello this is a listitem
          {props.commentList}
        </li>
        <li className="list-group-item">I will be a comment text</li>
      </ul>
    </div>
  );
};

export default ViewComments;
