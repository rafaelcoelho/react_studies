import React, { Component } from "react";
import "./style.css"

class GradeCard extends Component {
  render() {
    return (
      <section className="card-grade">
        <header className="card-grade_header">
          <h3 className="card-grade_subject">{this.props.subject}</h3>
        </header>
        <p className="card-grade_text">{this.props.text}</p>
      </section>
    );
  }
}

export default GradeCard;
