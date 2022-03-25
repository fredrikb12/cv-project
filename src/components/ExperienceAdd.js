/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Button from "./Button";

class ExperienceAdd extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      isAdding,
      onSubmit,
      onAddClick,
      handleChange,
      company,
      position,
      tasks,
      date,
    } = this.props;
    return isAdding ? (
      <form>
        <div>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={company}
              onChange={handleChange}
              className="experience-add-input"
            />
          </label>
        </div>
        <div>
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={position}
              onChange={handleChange}
              className="experience-add-input"
            />
          </label>
        </div>
        <div>
          <label>
            Tasks:
            <input
              type="text"
              name="tasks"
              value={tasks}
              onChange={handleChange}
              className="experience-add-input"
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
              className="experience-add-input"
            />
          </label>
        </div>
        <button
          className="button submit-button"
          type="submit"
          id="experience-submit"
          onClick={(e) => onSubmit(e, null, "experience-submit")}
        >
          Submit
        </button>
      </form>
    ) : (
      <Button
        classNames={"add-button"}
        id={"experience-add"}
        onClick={(e) => onAddClick(e)}
        text={"Add Experience"}
      />
    );
  }
}

export default ExperienceAdd;
