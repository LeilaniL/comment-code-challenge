import React, { Component } from "react";
import myFirebase from "../firebaseConfig";

import CommentForm from "./CommentForm";
import ViewComments from "./ViewComments";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    };
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
  componentDidUpdate() {
    console.log("Updated state: ", this.state);
  }
  render() {
    return (
      <div className="App">
        <CommentForm onComment={this.handleSavingComment} />
        <ViewComments />
      </div>
    );
  }
}

export default App;
