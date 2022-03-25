/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class EducationEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { editItem, isEditing, onSubmit, handleChange } = this.props;

    const returnItem =
      isEditing === true ? (
        <form>
          <label>
            School:
            <input
              className="education-edit-input"
              name="school"
              value={editItem.school}
              onChange={handleChange}
            />
          </label>
          <label>
            Program:
            <input
              className="education-edit-input"
              name="program"
              value={editItem.program}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              className="education-edit-input"
              name="date"
              value={editItem.date}
              onChange={handleChange}
            />
          </label>
          <div>
            <button className="button submit-button"
              id="education-edit-submit-button"
              onClick={(e) => onSubmit(e, editItem.id, "education-edit")}
            >
              Finish Editing
            </button>
          </div>
        </form>
      ) : null;

    return returnItem;
  }
}

export default EducationEdit;
