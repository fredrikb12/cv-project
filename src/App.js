import React, { useState } from "react";
import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import uniqid from "uniqid";
import EducationAdd from "./components/EducationAdd";
import EducationEdit from "./components/EducationEdit";
import Experience from "./components/Experience";
import ExperienceEdit from "./components/ExperienceEdit";
import ExperienceAdd from "./components/ExperienceAdd";
import ViewOutput from "./components/ViewOutput";
import WorkingModeButton from "./components/WorkingModeButton";

function App() {
  const [general, setGeneral] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState({
    addItem: {
      school: "",
      program: "",
      date: "",
      id: uniqid(),
    },
    editItem: {
      school: "",
      program: "",
      date: "",
      id: "",
    },
    items: [],
  });
  const [experience, setExperience] = useState({
    addItem: {
      company: "",
      position: "",
      tasks: "",
      date: "",
      id: uniqid(),
    },
    editItem: {
      company: "",
      position: "",
      tasks: "",
      date: "",
      id: "",
    },
    items: [],
  });
  const [isEditing, setIsEditing] = useState({
    edu: false,
    exp: false,
    gen: false,
  });
  const [isAdding, setIsAdding] = useState({
    edu: false,
    exp: false,
  });
  const [workingMode, setWorkingMode] = useState({ workingMode: true });

  const changeWorkingMode = () => {
    workingMode ? setWorkingMode(false) : setWorkingMode(true);
  };

  const onAddClick = (e) => {
    if (e.target.id === "education-add") {
      setIsAdding({ ...isAdding, edu: true });
    }
    if (e.target.id === "experience-add") {
      setIsAdding({ ...isAdding, exp: true });
    }
  };

  const onEditClick = (e, id, type) => {
    if (type === "general-edit") {
      setIsEditing({ ...isEditing, gen: true });
    }
    if (type === "education-edit") {
      const editedItem = education.items.find((item) => item.id === id);
      const current = { ...education, editItem: editedItem };
      setIsEditing({ ...isEditing, edu: true });
      setEducation(current);
    }
    if (type === "experience-edit") {
      const editedItem = experience.items.find((item) => item.id === id);
      const current = { ...experience, editItem: editedItem };
      setIsEditing({ ...isEditing, exp: true });
      setExperience(current);
    }
  };

  const onDeleteClick = (e, id, section) => {
    if (section === "education") {
      const filteredItems = education.items.filter((item) => item.id !== id);
      setEducation({ ...education, items: filteredItems });
    }
    if (section === "experience") {
      const current = { ...experience };
      const filteredItems = experience.items.filter((item) => item.id !== id);
      current.items = filteredItems;
      setExperience(current);
    }
  };

  const onSubmitGeneral = (e) => {
    e.preventDefault();
    const value = general;
    setIsEditing({ ...isEditing, gen: false });
    setGeneral(value);
  };

  const onSubmitEducation = (e, id, type) => {
    e.preventDefault();
    if (type === "education-edit") {
      const emptyItem = { school: "", program: "", date: "", id: "" };
      const current = { ...education };
      const editedItem = { ...current.editItem };
      current.editItem = emptyItem;
      const foundIndex = current.items.findIndex(
        (item) => item.id === editedItem.id
      );
      current.items[foundIndex] = editedItem;
      setEducation(current);
      setIsEditing({ ...isEditing, edu: false });
    }
    if (type === "education-submit") {
      const current = { ...education };
      const addItem = { ...current.addItem };
      current.items = [...current.items, addItem];
      const emptyItem = { school: "", program: "", date: "", id: uniqid() };
      current.addItem = emptyItem;
      setEducation(current);
      setIsAdding({ ...isAdding, edu: false });
    }
  };

  const onSubmitExperience = (e, id, type) => {
    e.preventDefault();
    if (type === "experience-edit") {
      const current = { ...experience };
      const emptyItem = {
        company: "",
        position: "",
        tasks: "",
        date: "",
        id: "",
      };
      const editedItem = { ...current.editItem };
      current.editItem = emptyItem;
      const foundIndex = current.items.findIndex(
        (item) => item.id === editedItem.id
      );
      current.items[foundIndex] = editedItem;
      setExperience(current);
      setIsEditing({ ...isEditing, exp: false });
    }
    if (type === "experience-submit") {
      const current = { ...experience };
      const addItem = { ...current.addItem };
      current.items = [...current.items, addItem];
      const emptyItem = {
        company: "",
        position: "",
        tasks: "",
        date: "",
        id: uniqid(),
      };
      current.addItem = emptyItem;
      setExperience(current);
      setIsAdding({ ...isAdding, exp: false });
    }
  };

  const handleGeneralChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const current = { ...general };
    current[name] = value;

    setGeneral(current);
  };

  const handleEducationChange = (e) => {
    if (e.target.classList.contains("education-add-input")) {
      const value = e.target.value;
      const name = e.target.name;
      const current = { ...education };
      current.addItem[name] = value;
      setEducation(current);
    } else if (e.target.classList.contains("education-edit-input")) {
      const value = e.target.value;
      const name = e.target.name;
      const current = { ...education };
      current.editItem[name] = value;
      setEducation(current);
    }
  };

  const handleExperienceChange = (e) => {
    if (e.target.classList.contains("experience-add-input")) {
      const value = e.target.value;
      const name = e.target.name;
      const current = { ...experience };
      current.addItem[name] = value;
      setExperience(current);
    }
    if (e.target.classList.contains("experience-edit-input")) {
      const value = e.target.value;
      const name = e.target.name;
      const current = { ...experience };
      current.editItem[name] = value;
      setExperience(current);
    }
  };

  if (workingMode) {
    return (
      <div id="page-container">
        <WorkingModeButton
          onClick={changeWorkingMode}
          workingMode={workingMode}
        />
        <div id="main-container">
          <GeneralInfo
            workingMode={workingMode}
            isEditing={isEditing.gen}
            handleChange={handleGeneralChange}
            onEditClick={onEditClick}
            onSubmit={onSubmitGeneral}
            name={general.name}
            phone={general.phone}
            email={general.email}
          />
          <Education
            items={education.items}
            editItem={education.editItem}
            onDeleteClick={onDeleteClick}
            onEditClick={onEditClick}
          />
          <EducationEdit
            editItem={education.editItem}
            isEditing={isEditing.edu}
            onSubmit={onSubmitEducation}
            handleChange={handleEducationChange}
          />
          <EducationAdd
            isAdding={isAdding.edu}
            onSubmit={onSubmitEducation}
            onAddClick={onAddClick}
            handleChange={handleEducationChange}
            school={education.addItem.school}
            program={education.addItem.program}
            date={education.addItem.date}
          />
          <Experience
            items={experience.items}
            editItem={experience.editItem}
            onDeleteClick={onDeleteClick}
            onEditClick={onEditClick}
          />
          <ExperienceEdit
            editItem={experience.editItem}
            isEditing={isEditing.exp}
            onSubmit={onSubmitExperience}
            handleChange={handleExperienceChange}
          />
          <ExperienceAdd
            isAdding={isAdding.exp}
            onSubmit={onSubmitExperience}
            onAddClick={onAddClick}
            handleChange={handleExperienceChange}
            company={experience.addItem.company}
            position={experience.addItem.position}
            tasks={experience.addItem.tasks}
            date={experience.addItem.date}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div id="page-container">
        <WorkingModeButton
          onClick={changeWorkingMode}
          workingMode={workingMode}
        />

        <ViewOutput
          generalInfo={general}
          educationItems={education.items}
          experienceItems={experience.items}
          workingMode={workingMode}
          isEditing={false}
        />
      </div>
    );
  }
}

export default App;
