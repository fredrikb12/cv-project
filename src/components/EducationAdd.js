/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class EducationAdd extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isAdding,
      onSubmit,
      onAddClick,
      handleChange,
      school,
      program,
      date,
    } = this.props;
    return isAdding ? (
      <form>
        <div>
          <label>
            School:
            <input
              type="text"
              name="school"
              value={school}
              onChange={handleChange}
              className="education-add-input"
            />
          </label>
        </div>
        <div>
          <label>
            Program:
            <input
              type="text"
              name="program"
              value={program}
              onChange={handleChange}
              className="education-add-input"
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={date}
              onChange={handleChange}
              className="education-add-input"
            />
          </label>
        </div>
        <button
          type="submit"
          id="education-submit"
          onClick={(e) => onSubmit(e)}
        >
          Submit
        </button>
      </form>
    ) : (
      <button id="education-add" onClick={(e) => onAddClick(e)}>
        Add Education
      </button>
    );
  }
}

export default EducationAdd;
