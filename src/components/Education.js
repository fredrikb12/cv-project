/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, program, date, handleChange, onSubmit } = this.props;
    return (
      <form id="education-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="school">School:</label>
          <input
            type="text"
            name="school"
            value={school}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="program">Program:</label>
          <input
            type="text"
            name="program"
            value={program}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="text" name="date" value={date} onChange={handleChange} />
        </div>
        <button type="submit" id="submit-education">
          Submit
        </button>
      </form>
    );
  }
}

export default Education;
