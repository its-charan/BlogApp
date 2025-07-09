import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import CreateBlog from './Components/CreateBlog';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="mt-4">
        {activeSection === 'home' && <Cards />}
        {activeSection === 'createblog' && <CreateBlog />}
      </div>
    </div>
  );
}

export default App;
