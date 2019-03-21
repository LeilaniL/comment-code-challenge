import React from "react";

const ViewComments = props => {
  console.log("I am props: ", props);
  return (
    <div className="container">
      <ul className="list-group">
        {props.listOfComments.commentList.map(comment => (
          <div>
            <li className="list-group-item list-group-item-primary">
              <b>{comment.commenterName}</b>
              <span>
                <i> Posted: {comment.timestamp}</i>
              </span>
            </li>
            <li className="list-group-item">{comment.commentBody}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ViewComments;
