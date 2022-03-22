/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items, editItem, isEditing, onDeleteClick } = this.props;
    console.log(items);
    if (items.length > 0) {
      const itemsToRender = items.map((item) => {
        if (!item) return null;
        if (item.id === editItem.id) return null;
        return (
          <div
            key={item.id}
            style={{ borderBottom: "1px solid black", marginBottom: "20px" }}
          >
            <h2>{item.school}</h2>
            <h2>{item.program}</h2>
            <h2>{item.date}</h2>
            <button onClick={(e) => onDeleteClick(e, item.id, "education")}>Delete</button>
          </div>
        );
      });
      return (
        <div>
          <h1 style={{ borderBottom: "1px solid black", width: "400px" }}>
            Education
          </h1>
          {itemsToRender}
        </div>
      );
    }
    return null;
  }
}

export default Education;
