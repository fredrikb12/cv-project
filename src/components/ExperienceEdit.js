/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class ExperienceEdit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { editItem, isEditing, onSubmit, handleChange } = this.props;

    const returnItem =
      isEditing === true ? (
        <form>
          <label>
            Company:
            <input
              className="experience-edit-input"
              name="company"
              value={editItem.company}
              onChange={handleChange}
            />
          </label>
          <label>
            Position:
            <input
              className="experience-edit-input"
              name="position"
              value={editItem.position}
              onChange={handleChange}
            />
          </label>
          <label>
            Tasks:
            <input
              className="experience-edit-input"
              name="tasks"
              value={editItem.tasks}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              className="experience-edit-input"
              name="date"
              value={editItem.date}
              onChange={handleChange}
            />
          </label>
          <div>
            <button className="button submit-button"
              id="experience-edit-submit-button"
              onClick={(e) => onSubmit(e, editItem.id, "experience-edit")}
            >
              Finish Editing
            </button>
          </div>
        </form>
      ) : null;

    return returnItem;
  }
}

export default ExperienceEdit;
