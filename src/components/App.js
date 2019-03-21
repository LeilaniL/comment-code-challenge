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
    let commentsRef = myFirebase
      .database()
      .ref("comments")
      .orderByKey()
      .limitToLast(10);
    commentsRef.on("child_added", snapshot => {
      console.log("This ", this);
      /* Update React state with new array when message is added at Firebase Database */
      console.log(
        "I am child snapshot: ",
        snapshot.child("commenterName").val()
      );
      let newComment = {
        commenterName: snapshot.child("commenterName").val(),
        commentBody: snapshot.child("commentBody").val(),
        timestamp: snapshot.child("timestamp").val()
      };
      let updatedCommentList = this.state.commentList.slice();
      updatedCommentList.push(newComment);
      this.setState({ commentList: updatedCommentList });
      console.log("I am updated list: ", updatedCommentList);
    });
  }
  componentDidUpdate() {
    console.log("Updated state: ", this.state);
  }
  handleSavingComment = comment => {
    console.log("App called handleSaving");
    let newState = this.state.commentList.slice();
    newState.push(comment);
    this.setState({ commentList: newState });
    console.log("test Firebase");
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
