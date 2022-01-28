import React, { Component } from "react";
import "./style.css";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.subject = "";
    this.text = "";
  }

  _handleSubjectUpdate(event) {
    event.stopPropagation();
    this.subject = event.target.value;
  }

  _handleTextUpdate(event) {
    event.stopPropagation();
    this.text = event.target.value;
  }

  _createGrade(event) {
    event.preventDefault();
    event.stopPropagation();

    //Invoke the dependency one
    this.props.createGrade(this.subject, this.text);
  }

  render() {
    return (
      <form className="form-register" onSubmit={this._createGrade.bind(this)}>
        <input
          type="text"
          placeholder="Subject"
          className="form-register_input"
          onChange={this._handleSubjectUpdate.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Write down you grade value..."
          className="form-register_input"
          onChange={this._handleTextUpdate.bind(this)}
        />
        <button className="form-register_input form-register_submit">
          Create a new grade
        </button>
      </form>
    );
  }
}

export default RegisterForm;
