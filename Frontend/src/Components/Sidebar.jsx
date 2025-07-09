import React, { useState } from 'react';

const Sidebar = ({ activeSection, setActiveSection }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        {
            id: 'home',
            label: 'Home',
            icon: 'fas fa-home',
            badge: null
        },
        {
            id: 'create',
            label: 'Create New Blog',
            icon: 'fas fa-plus-circle',
            badge: null
        },
        {
            id: 'my-blogs',
            label: 'My Blogs',
            icon: 'fas fa-file-alt',
            badge: '5'
        },
        {
            id: 'drafts',
            label: 'Drafts',
            icon: 'fas fa-edit',
            badge: '2'
        },
        {
            id: 'categories',
            label: 'Categories',
            icon: 'fas fa-tags',
            badge: null
        },
        {
            id: 'analytics',
            label: 'Analytics',
            icon: 'fas fa-chart-line',
            badge: null
        },
        {
            id: 'settings',
            label: 'Settings',
            icon: 'fas fa-cog',
            badge: null
        }
    ];

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <div className="d-flex align-items-center">
                    <i className="fas fa-blog text-primary me-2"></i>
                    {!isCollapsed && <span className="fw-bold">MyBlogs</span>}
                </div>
                <button 
                    className="btn btn-sm btn-outline-secondary ms-auto"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <i className={`fas fa-${isCollapsed ? 'chevron-right' : 'chevron-left'}`}></i>
                </button>
            </div>
            
            <div className="sidebar-menu">
                {menuItems.map((item) => (
                    <div 
                        key={item.id}
                        className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => setActiveSection(item.id)}
                    >
                        <i className={`${item.icon} menu-icon`}></i>
                        {!isCollapsed && (
                            <>
                                <span className="menu-label">{item.label}</span>
                                {item.badge && (
                                    <span className="badge bg-primary ms-auto">{item.badge}</span>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>
            
            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="avatar-circle">
                        <i className="fas fa-user"></i>
                    </div>
                    {!isCollapsed && (
                        <div className="user-info">
                            <div className="user-name">John Doe</div>
                            <div className="user-role">Writer</div>
                        </div>
                    )}
                </div>
                {!isCollapsed && (
                    <button className="btn btn-sm btn-outline-danger mt-2 w-100">
                        <i className="fas fa-sign-out-alt me-1"></i>Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
