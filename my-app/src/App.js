import React, { Component } from "react";
import GradeList from "./components/gradeList/GradeList";
import RegisterForm from "./components/registerForm/registerForm";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor() {
    super();

    //A special attribute used to update the visualization
    this.state = {
      grades: []
    }
  }

  newGrade(subject, text) {
    const newGrade = { subject, text };
    const gradesList = [...this.state.grades, newGrade]
    const newStatus = {
      grades: gradesList
    }
    this.setState(newStatus)
  }

  render() {
    return (
      <section className="content">

        //DI using properties from JSX
        <RegisterForm createGrade={this.newGrade.bind(this)} />

        <GradeList grades={this.state.grades} />
      </section>
    );
  }
}

export default App;
