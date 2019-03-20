import React, { Component } from "react";
import myFirebase from "../firebaseConfig";

import CommentForm from "./CommentForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        commenterName: "Tester",
        commentBody: "this is only a test"
      }
    };
  }
  testFirebase = () => {
    myFirebase
      .database()
      .ref("comments")
      .push(this.state);
  };
  render() {
    return (
      <div className="App">
        <CommentForm />

        <button onClick={this.testFirebase}>Test Comment</button>
      </div>
    );
  }
}

export default App;
