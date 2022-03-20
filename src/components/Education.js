/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      school,
      program,
      date,
      handleChange,
      onSubmit,
      onEditClick,
      onDeleteClick,
      isEditing,
      items,
    } = this.props;

    const allItems = items.map((item) => {
      return (
        <div key={item.id}>
          <h2>School: {item.school}</h2>
          <h2>Program: {item.program}</h2>
          <h2>Date: {item.date}</h2>
          <button
            className="education-delete-button"
            onClick={(e) => onDeleteClick(e, item.id)}
          >
            Delete
          </button>
        </div>
      );
    });

    if (isEditing) {
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
            <input
              type="text"
              name="date"
              value={date}
              onChange={handleChange}
            />
          </div>
          <button type="submit" id="submit-education">
            Submit
          </button>
        </form>
      );
    } else {
      if (allItems.length < 1) {
        return (
          <div>
            <h2>School: {school}</h2>
            <h2>Program: {program}</h2>
            <h2>Date: {date}</h2>
            <button id="education-edit" onClick={(e) => onEditClick(e)}>
              Add Education
            </button>
          </div>
        );
      }
      return allItems;
    }
  }
}

export default Education;
