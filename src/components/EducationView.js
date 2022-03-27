/* eslint-disable no-useless-constructor */
import React from "react";

function EducationView({ items }) {
  return (
    <div className="output-view-section">
      <h1 className="section-header bottom-border">Education</h1>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              borderBottom: "1px solid black",
              marginBottom: "20px",
              paddingBottom: "10px",
            }}
          >
            <h2 className="section-subheader">{item.school}</h2>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h3>{item.program}</h3>
              <h5 style={{ color: "grey" }}>{item.date}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EducationView;
