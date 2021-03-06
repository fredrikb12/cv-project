/* eslint-disable no-useless-constructor */
import React from "react";
import Button from "./Button";

function ExperienceEdit({ editItem, isEditing, onSubmit, handleChange }) {
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
          <Button
            classNames={"submit-button"}
            id={"experience-edit-submit-button"}
            onClick={(e) => onSubmit(e, editItem.id, "experience-edit")}
            text={"Finish Editing"}
          />
        </div>
      </form>
    ) : null;

  return returnItem;
}

export default ExperienceEdit;
