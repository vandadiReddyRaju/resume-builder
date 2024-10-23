import React from 'react';

function ResumePreview({ resumeData }) {
  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>

      {/* Personal Information */}
      <div className="resume-section">
        <h3>{resumeData.name}</h3>
        <p>{resumeData.email}</p>
        <p>{resumeData.phone}</p>
      </div>

      {/* Most Recent Education */}
      <div className="resume-section">
        <h4>Most Recent Education</h4>
        <p>College: {resumeData.college}</p>
        <p>Branch: {resumeData.branch}</p>
        <p>Year of Passing: {resumeData.yearOfPassing}</p>
        <p>Percentage: {resumeData.percentage}</p>
      </div>

      {/* Skills */}
      <div className="resume-section">
        <h4>Skills</h4>
        {Object.keys(resumeData.skills || {})
          .filter(skill => resumeData.skills[skill] && skill !== 'otherSkill')
          .map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        {resumeData.skills?.otherSkill && <p>Other: {resumeData.skills.otherSkill}</p>}
      </div>

      {/* Projects */}
      <div className="resume-section">
        <h4>Projects</h4>
        {resumeData.projects &&
          resumeData.projects.map((project, index) => (
            <div key={index}>
              <h5>{project.projectName}</h5>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.url}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ResumePreview;
