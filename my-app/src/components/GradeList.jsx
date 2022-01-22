import React, { Component } from "react";
import CardNota from "./GradeCard";

class GradeList extends Component {
  render() {
    return (
      <ul>
        {Array.of("Home Work", "Home Work", "Studies").map((category) => {
          return (
            <li>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default GradeList;
