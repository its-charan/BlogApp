import React from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">
                    <i className="bi bi-journal-text me-2"></i>
                    MyBlog
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button
                                className={`nav-link btn btn-link text-light ${activeSection === 'home' ? 'active fw-bold' : ''}`}
                                onClick={() => setActiveSection('home')}
                            >
                                <i className="bi bi-house me-1"></i>
                                Home
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link btn btn-link text-light ${activeSection === 'createblog' ? 'active fw-bold' : ''}`}
                                onClick={() => setActiveSection('createblog')}
                            >
                                <i className="bi bi-plus-circle me-1"></i>
                                Create Blog
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
