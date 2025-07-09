import React from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">
                        <i className="bi bi-journal-text me-2"></i>MyBlogs
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button 
                                    className={`nav-link btn btn-link text-light ${activeSection === 'view' ? 'active fw-bold' : ''}`}
                                    onClick={() => setActiveSection('view')}
                                >
                                    <i className="bi bi-grid me-1"></i>All Blogs
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className={`nav-link btn btn-link text-light ${activeSection === 'create' ? 'active fw-bold' : ''}`}
                                    onClick={() => setActiveSection('create')}
                                >
                                    <i className="bi bi-plus-circle me-1"></i>Create Blog
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
