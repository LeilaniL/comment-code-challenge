import React, { Component } from "react";

var myFormStyles = {
  paddingTop: "10px",
  paddingBottom: "10px"
};

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.inputName = React.createRef();
    this.handleCommenting = this.handleCommenting.bind(this);
    this.state = {
      commenterName: "",
      commentBody: "",
      timestamp: null
    };
  }
  handleCommenting = event => {
    event.preventDefault();
    let newState = {};
    newState = {
      commenterName: this.inputName.value,
      commentBody: this.inputComment.value,
      timestamp: new Date()
    }
    this.setState(newState);
  };
  componentDidUpdate(){
    console.log("Updated state: ", this.state);
  }
  render() {
    return (
      <div className="container" style={myFormStyles}>
        <form onSubmit={this.handleCommenting}>
          <input
            ref={input => {
              this.inputName = input;
            }}
            name="commenterName"
            type="text"
            placeholder="Name"
            className="form-control"
          />
          <textarea
            ref={textarea => (this.inputComment = textarea)}
            name="commentBody"
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
  }
}

export default CommentForm;
