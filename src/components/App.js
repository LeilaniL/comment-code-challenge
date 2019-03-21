import React, { Component } from "react";
import myFirebase from "../firebaseConfig";

import CommentForm from "./CommentForm";
import ViewComments from "./ViewComments";

const headerStyles = {
  fontFamily: "monospace",
  color: "purple",
  textAlign: "center"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    };
  }
  componentDidMount() {
    // get list of comments from database
    let commentsRef = myFirebase
      .database()
      .ref("comments")
      .orderByKey()
      .limitToLast(10);
    commentsRef.on("child_added", snapshot => {
      /* Update React state with new array when message added to database */
      let newComment = {
        commenterName: snapshot.child("commenterName").val(),
        commentBody: snapshot.child("commentBody").val(),
        timestamp: snapshot.child("timestamp").val()
      };
      let updatedCommentList = this.state.commentList.slice();
      updatedCommentList.push(newComment);
      this.setState({ commentList: updatedCommentList });
    });
  }
  // for testing purposes
  componentDidUpdate() {
    console.log("Updated state: ", this.state);
  }
  //
  // save comment to database and update state
  handleSavingComment = comment => {
    let newState = this.state.commentList.slice();
    newState.push(comment);
    this.setState({ commentList: newState });
    myFirebase
      .database()
      .ref("comments")
      .push(comment);
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 style={headerStyles}>Comments</h1>
          <CommentForm onComment={this.handleSavingComment} />
          {this.state.commentList.length > 0 ? (
            <ViewComments listOfComments={this.state} />
          ) : (
            <p>Please add a comment</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
