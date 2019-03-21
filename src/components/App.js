import React, { Component } from "react";
import myFirebase from "../firebaseConfig";

import CommentForm from "./CommentForm";
import ViewComments from "./ViewComments";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [""]
    };
  }
  componentWillMount() {
    // TODO fix so state isn't updated for every comment already in database
    let commentsRef = myFirebase
      .database()
      .ref("comments")
      .orderByKey()
      .limitToLast(10);
    commentsRef.on("child_added", snapshot => {
      /* Update React state with new array when message added to Firebase Database */
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
        <CommentForm onComment={this.handleSavingComment} />
        <ViewComments listOfComments={this.state} />
      </div>
    );
  }
}

export default App;
