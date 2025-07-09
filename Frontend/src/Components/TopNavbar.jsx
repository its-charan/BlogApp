import React from 'react';

const TopNavbar = () => {
    return (
        <nav className="top-navbar">
            <div className="navbar-content">
                <div className="navbar-left">
                    <h4 className="page-title mb-0">Dashboard</h4>
                </div>
                
                <div className="navbar-center">
                    <div className="search-box">
                        <i className="fas fa-search search-icon"></i>
                        <input 
                            type="text" 
                            placeholder="Search blogs, categories, or users..."
                            className="search-input"
                        />
                    </div>
                </div>
                
                <div className="navbar-right">
                    <div className="nav-actions">
                        <button className="btn btn-icon" title="Notifications">
                            <i className="fas fa-bell"></i>
                            <span className="notification-badge">3</span>
                        </button>
                        
                        <button className="btn btn-icon" title="Messages">
                            <i className="fas fa-envelope"></i>
                            <span className="notification-badge">7</span>
                        </button>
                        
                        <div className="dropdown">
                            <button className="btn btn-icon dropdown-toggle" data-bs-toggle="dropdown">
                                <div className="avatar-circle">
                                    <i className="fas fa-user"></i>
                                </div>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i>Profile</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i>Settings</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fas fa-question-circle me-2"></i>Help</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item text-danger" href="#"><i className="fas fa-sign-out-alt me-2"></i>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;
