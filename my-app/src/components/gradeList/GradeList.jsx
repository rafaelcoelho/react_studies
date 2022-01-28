import React, { Component } from "react";
import CardNota from "../cardGrade/GradeCard";
import "./style.css";

class GradeList extends Component {
  render() {
    return (
      <ul className="grade-list">
        {this.props.grades.map((grade, index) => {
          return (
            <li className="grade-list_item" key={index}>
              <CardNota subject={grade.subject} text={grade.text} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default GradeList;
