/* eslint-disable no-useless-constructor */
import React from "react";
import Button from "./Button";

function EducationEdit({ editItem, isEditing, onSubmit, handleChange }) {
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
          <Button
            classNames={"submit-button"}
            id={"education-edit-submit-button"}
            onClick={(e) => onSubmit(e, editItem.id, "education-edit")}
            text={"Finish Editing"}
          />
        </div>
      </form>
    ) : null;

  return returnItem;
}

export default EducationEdit;
