import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import TopNavbar from './Components/TopNavbar';
import Home from './Components/Home';
import CreateNewBlog from './Components/CreateNewBlog';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'create':
        return <CreateNewBlog />;
      case 'my-blogs':
        return <div className="content-placeholder">My Blogs Section</div>;
      case 'drafts':
        return <div className="content-placeholder">Drafts Section</div>;
      case 'categories':
        return <div className="content-placeholder">Categories Section</div>;
      case 'analytics':
        return <div className="content-placeholder">Analytics Section</div>;
      case 'settings':
        return <div className="content-placeholder">Settings Section</div>;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="main-content">
        <TopNavbar />
        <div className="content-area">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
