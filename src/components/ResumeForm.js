import React, { useState } from 'react';

function ResumeForm({ updateResumeData, resumeData }) {
  const [projects, setProjects] = useState([
    { projectName: '', description: '', url: '' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateResumeData({ [name]: value });
  };

  const handleSkillChange = (e) => {
    const { name, checked } = e.target;
    updateResumeData({
      skills: {
        ...resumeData.skills,
        [name]: checked,
      },
    });
  };

  const handleProjectChange = (index, e) => {
    const updatedProjects = [...projects];
    updatedProjects[index][e.target.name] = e.target.value;
    setProjects(updatedProjects);
    updateResumeData({ projects: updatedProjects });
  };

  const addProject = () => {
    setProjects([...projects, { projectName: '', description: '', url: '' }]);
  };

  return (
    <div className="resume-form">
      <h2>Fill Your Details</h2>
      <h3>Personal Information</h3>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={resumeData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={resumeData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={resumeData.phone}
        onChange={handleChange}
      />

      {/* Most Recent Education */}
      <h3>Most Recent Education</h3>
      <input
        type="text"
        name="college"
        placeholder="College"
        value={resumeData.college}
        onChange={handleChange}
      />
      <input
        type="text"
        name="branch"
        placeholder="Branch"
        value={resumeData.branch}
        onChange={handleChange}
      />
      <input
        type="text"
        name="yearOfPassing"
        placeholder="Year of Passing"
        value={resumeData.yearOfPassing}
        onChange={handleChange}
      />
      <input
        type="text"
        name="percentage"
        placeholder="Percentage"
        value={resumeData.percentage}
        onChange={handleChange}
      />

      {/* Skills */}
      <h3>Skills</h3>
      <div className="skills-section">
        <label>
          <input
            type="checkbox"
            name="HTML"
            checked={resumeData.skills?.HTML || false}
            onChange={handleSkillChange}
          />
          HTML
        </label>
        <label>
          <input
            type="checkbox"
            name="CSS"
            checked={resumeData.skills?.CSS || false}
            onChange={handleSkillChange}
          />
          CSS
        </label>
        <label>
          <input
            type="checkbox"
            name="React Js"
            checked={resumeData.skills?.['React Js'] || false}
            onChange={handleSkillChange}
          />
          React Js
        </label>
        <label>
          <input
            type="checkbox"
            name="Node Js"
            checked={resumeData.skills?.['Node Js'] || false}
            onChange={handleSkillChange}
          />
          Node Js
        </label>
        <label>
          <input
            type="checkbox"
            name="JavaScript"
            checked={resumeData.skills?.JavaScript || false}
            onChange={handleSkillChange}
          />
          JavaScript
        </label>
        <label>
          <input
            type="checkbox"
            name="Java"
            checked={resumeData.skills?.Java || false}
            onChange={handleSkillChange}
          />
          Java
        </label>
        <label>
          <input
            type="checkbox"
            name="Spring"
            checked={resumeData.skills?.Spring || false}
            onChange={handleSkillChange}
          />
          Spring
        </label>
        <label>
          <input
            type="checkbox"
            name="Python"
            checked={resumeData.skills?.Python || false}
            onChange={handleSkillChange}
          />
          Python
        </label>
        <label>
          <input
            type="checkbox"
            name="SQL"
            checked={resumeData.skills?.SQL || false}
            onChange={handleSkillChange}
          />
          SQL
        </label>
      </div>
      <input
        type="text"
        name="otherSkill"
        placeholder="Other (please specify)"
        value={resumeData.skills?.otherSkill || ''}
        onChange={handleChange}
      />

      {/* Projects */}
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <div key={index} className="project-section">
          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={project.projectName}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={project.description}
            onChange={(e) => handleProjectChange(index, e)}
          />
          <input
            type="text"
            name="url"
            placeholder="Project URL"
            value={project.url}
            onChange={(e) => handleProjectChange(index, e)}
          />
        </div>
      ))}
      <button type="button" onClick={addProject}>
        Add Another Project
      </button>
    </div>
  );
}

export default ResumeForm;
