import React, { Component } from "react";
import GradeList from "./components/GradeList";
import  RegisterForm  from "./components/RegisterForm";
class App extends Component {
  render() {
    return (
      <section>
        <RegisterForm />
        <GradeList />
      </section>
    );
  }
}

export default App;
