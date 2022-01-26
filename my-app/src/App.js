import React, { Component } from "react";
import GradeList from "./components/gradeList/GradeList";
import  RegisterForm  from "./components/registerForm/registerForm";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      grades:[]
    }
  }

  newGrade(subject, text){
    const grade = {subject, text};
    const grades = [...this.state.grades, grade]
    const status = {
      grades:grades
    }
    this.setState(status)
  }

  render() {
    return (
      <section className="content">
        <RegisterForm createGrade={this.newGrade.bind(this)}/>
        <GradeList grades={this.state.grades}/>
      </section>
    );
  }
}

export default App;
