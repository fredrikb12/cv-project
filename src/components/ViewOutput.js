/* eslint-disable no-useless-constructor */
import React from "react";
import EducationView from "./EducationView";
import ExperienceView from "./ExperienceView";
import GeneralInfo from "./GeneralInfo";

function ViewOutput(props) {
  return (
    <div id="main-container" className="output-container">
      <GeneralInfo
        workingMode={props.workingMode}
        name={props.generalInfo.name}
        phone={props.generalInfo.phone}
        email={props.generalInfo.email}
      />

      <EducationView items={props.educationItems} />
      <ExperienceView items={props.experienceItems} />
    </div>
  );
}

export default ViewOutput;
