import React, { useState } from 'react';
import Header from './components/Hedaer';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: ''
  });

  const updateResumeData = (newData) => {
    setResumeData({ ...resumeData, ...newData });
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <ResumeForm updateResumeData={updateResumeData} resumeData={resumeData} />
        <ResumePreview resumeData={resumeData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
