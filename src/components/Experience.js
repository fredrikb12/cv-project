/* eslint-disable no-useless-constructor */
import React from "react";
import Button from "./Button";

function Experience({ items, editItem, onDeleteClick, onEditClick }) {
  if (items.length > 0) {
    const itemsToRender = items.map((item, index) => {
      if (!item) return null;
      if (item.id === editItem.id) return null;
      return (
        <div
          key={item.id}
          style={{ borderBottom: "1px solid black", marginBottom: "20px" }}
        >
          <h2 className="section-subheader">{item.company}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>{item.position}</h3>
            <h5 style={{ color: "grey" }}>{item.date}</h5>
          </div>
          <p>{item.tasks}</p>
          <Button
            type={"button"}
            onClick={(e) => onDeleteClick(e, item.id, "experience")}
            classNames={"delete-button"}
            text={"Delete"}
          />
          <Button
            type={"button"}
            onClick={(e) => onEditClick(e, item.id, "experience-edit")}
            text={"Edit"}
            classNames={"edit-button"}
          />
        </div>
      );
    });
    return (
      <div>
        <h1
          className="section-header"
          style={{ borderBottom: "1px solid black", width: "400px" }}
        >
          Experience
        </h1>
        {itemsToRender}
      </div>
    );
  }
  return (
    <div>
      <h1
        className="section-header"
        style={{ borderBottom: "1px solid black", width: "400px" }}
      >
        Experience
      </h1>
    </div>
  );
}

export default Experience;
