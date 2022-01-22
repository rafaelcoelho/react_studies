import React, { Component } from "react";

class RegisterForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Write down your grade..." />
        <button>Create grade</button>
      </form>
    );
  }
}

export default RegisterForm;