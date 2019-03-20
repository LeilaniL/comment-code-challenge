import React, { Component } from "react";

var myFormStyles = {
  paddingTop: "10px",
  paddingBottom: "10px"
};

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.inputName = React.createRef();
    this.state = {
      commenterName: "",
      commentBody: "",
      timestamp: null
    };
  }
  handleSubmitComment = event => {
    console.log("Form called handleSubmit");
    event.preventDefault();
    this.props.onComment({
      commenterName: this.inputName.value,
      commentBody: this.inputComment.value,
      timestamp: new Date().toTimeString()
    });
    //   let newState = {};
    //   newState = {
    //     commenterName: this.inputName.value,
    //     commentBody: this.inputComment.value,
    //     timestamp: new Date()
    //   }
    //   this.setState(newState);
  };

  render() {
    return (
      <div className="container" style={myFormStyles}>
        <form onSubmit={this.handleSubmitComment}>
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
