import React, { useState } from 'react';
import Navbar from './Navbar';
import BlogList from './BlogList';
import CreateBlogForm from './CreateBlogForm';

const BlogDashboard = () => {
    const [activeSection, setActiveSection] = useState('view');
    
    return (
        <>
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="container-fluid py-4">
                {activeSection === 'view' && <BlogList />}
                {activeSection === 'create' && <CreateBlogForm />}
            </div>
        </>
    );
};

export default BlogDashboard;
