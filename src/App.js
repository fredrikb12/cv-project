import React, { Component } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "",
        email: "",
        phone: "",
      },
      education: {
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
      },
      experience: {
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
      },
      isEditingGen: false,
      isEditingEdu: false,
      isEditingExp: false,
      isAddingEdu: false,
      isAddingExp: false,
      workingMode: true,
    };

    this.onSubmitGeneral = this.onSubmitGeneral.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
    this.onSubmitExperience = this.onSubmitExperience.bind(this);

    this.handleGeneralChange = this.handleGeneralChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);

    this.onAddClick = this.onAddClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  changeWorkingMode = () => {
    const { workingMode } = this.state;
    workingMode === true
      ? this.setState({ workingMode: false })
      : this.setState({ workingMode: true });
  };

  onAddClick = (e) => {
    if (e.target.id === "education-add") {
      this.setState({ isAddingEdu: true });
    }
    if (e.target.id === "experience-add") {
      this.setState({ isAddingExp: true });
    }
  };

  onEditClick = (e, id, type) => {
    if (type === "general-edit") {
      this.setState({ isEditingGen: true });
    }
    if (type === "education-edit") {
      const editedItem = this.state.education.items.find(
        (item) => item.id === id
      );
      const current = { ...this.state.education };
      current.editItem = { ...editedItem };
      this.setState({ isEditingEdu: true });
      this.setState({ education: current });
    }
    if (type === "experience-edit") {
      const editedItem = this.state.experience.items.find(
        (item) => item.id === id
      );

      const current = { ...this.state.experience };
      current.editItem = editedItem;
      this.setState({ isEditingExp: true });
      this.setState({ experience: current });
    }
  };

  onDeleteClick = (e, id, section) => {
    if (section === "education") {
      const current = { ...this.state.education };
      const filteredItems = this.state.education.items.filter(
        (item) => item.id !== id
      );
      current.items = filteredItems;
      this.setState({ education: current });
    }
    if (section === "experience") {
      const current = { ...this.state.experience };
      const filteredItems = this.state.experience.items.filter(
        (item) => item.id !== id
      );
      current.items = filteredItems;
      this.setState({ experience: current });
    }
  };

  onSubmitGeneral = (e) => {
    e.preventDefault();
    const value = this.state.general;
    this.setState({ isEditingGen: false });
    this.setState({ general: value });
  };

  onSubmitEducation = (e, id, type) => {
    e.preventDefault();
    if (type === "education-edit") {
      const emptyItem = { school: "", program: "", date: "", id: "" };
      const current = { ...this.state.education };
      const editedItem = { ...current.editItem };
      current.editItem = emptyItem;
      const foundIndex = current.items.findIndex(
        (item) => item.id === editedItem.id
      );
      current.items[foundIndex] = editedItem;
      this.setState({ education: current });
      this.setState({ isEditingEdu: false });
    }
    if (type === "education-submit") {
      const current = { ...this.state.education };
      const addItem = { ...current.addItem };
      current.items = [...current.items, { ...addItem }];
      const emptyItem = { school: "", program: "", date: "", id: uniqid() };
      current.addItem = emptyItem;
      this.setState({ education: current });
      this.setState({ isAddingEdu: false });
    }
  };

  onSubmitExperience = (e, id, type) => {
    e.preventDefault();
    if (type === "experience-edit") {
      const current = { ...this.state.experience };
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

      this.setState({ experience: current });
      this.setState({ isEditingExp: false });
    }
    if (type === "experience-submit") {
      const current = { ...this.state.experience };
      const addItem = { ...current.addItem };
      current.items = [...current.items, { ...addItem }];
      const emptyItem = {
        company: "",
        position: "",
        tasks: "",
        date: "",
        id: uniqid(),
      };
      current.addItem = emptyItem;
      this.setState({ experience: current });
      this.setState({ isAddingExp: false });
    }
  };

  handleGeneralChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const current = { ...this.state.general };
    current[name] = value;

    this.setState({ general: current });
  };

  handleEducationChange = (e) => {
    if (e.target.classList.contains("education-add-input")) {
      const value = e.target.value;
      const name = e.target.name;
      const current = { ...this.state.education };
      current.addItem[name] = value;
      this.setState({ education: current });
    } else if (e.target.classList.contains("education-edit-input")) {
      const value = e.target.value;
      const name = e.target.name;
      const current = { ...this.state.education };
      current.editItem[name] = value;
      this.setState({ education: current });
    }
  };

  handleExperienceChange = (e) => {
    if (e.target.classList.contains("experience-add-input")) {
      const value = e.target.value;
      const name = e.target.name;
      const current = { ...this.state.experience };
      current.addItem[name] = value;
      this.setState({ experience: current });
    }
    if (e.target.classList.contains("experience-edit-input")) {
      const value = e.target.value;
      const name = e.target.name;
      const current = { ...this.state.experience };
      current.editItem[name] = value;
      this.setState({ experience: current });
    }
  };

  render() {
    if (this.state.workingMode) {
      return (
        <div id="page-container">
          <WorkingModeButton
            onClick={this.changeWorkingMode}
            workingMode={this.state.workingMode}
          />
          <div id="main-container">
            <GeneralInfo
              handleChange={this.handleGeneralChange}
              onSubmit={this.onSubmitGeneral}
              onClick={this.onEditClick}
              name={this.state.general.name}
              email={this.state.general.email}
              phone={this.state.general.phone}
              isEditing={this.state.isEditingGen}
            />
            <Education
              items={this.state.education.items}
              editItem={this.state.education.editItem}
              onDeleteClick={this.onDeleteClick}
              onEditClick={this.onEditClick}
            />
            <EducationEdit
              editItem={this.state.education.editItem}
              isEditing={this.state.isEditingEdu}
              onSubmit={this.onSubmitEducation}
              handleChange={this.handleEducationChange}
            />
            <EducationAdd
              isAdding={this.state.isAddingEdu}
              onSubmit={this.onSubmitEducation}
              onAddClick={this.onAddClick}
              handleChange={this.handleEducationChange}
              school={this.state.education.addItem.school}
              program={this.state.education.addItem.program}
              date={this.state.education.addItem.date}
            />
            <Experience
              items={this.state.experience.items}
              editItem={this.state.experience.editItem}
              onDeleteClick={this.onDeleteClick}
              onEditClick={this.onEditClick}
            />
            <ExperienceEdit
              editItem={this.state.experience.editItem}
              isEditing={this.state.isEditingExp}
              onSubmit={this.onSubmitExperience}
              handleChange={this.handleExperienceChange}
            />
            <ExperienceAdd
              isAdding={this.state.isAddingExp}
              onSubmit={this.onSubmitExperience}
              onAddClick={this.onAddClick}
              handleChange={this.handleExperienceChange}
              company={this.state.experience.addItem.company}
              position={this.state.experience.addItem.position}
              tasks={this.state.experience.addItem.tasks}
              date={this.state.experience.addItem.date}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div id="page-container">
          <WorkingModeButton
            onClick={this.changeWorkingMode}
            workingMode={this.state.workingMode}
          />

          <ViewOutput
            generalInfo={this.state.general}
            educationItems={this.state.education.items}
            experienceItems={this.state.experience.items}
          />
        </div>
      );
    }
  }
}

export default App;
