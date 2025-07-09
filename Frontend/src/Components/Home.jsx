import React from 'react';

const Home = () => {
    const stats = [
        { icon: 'fas fa-file-alt', label: 'Total Posts', value: '24', color: 'primary' },
        { icon: 'fas fa-eye', label: 'Total Views', value: '1,234', color: 'success' },
        { icon: 'fas fa-heart', label: 'Total Likes', value: '856', color: 'danger' },
        { icon: 'fas fa-comments', label: 'Comments', value: '142', color: 'warning' }
    ];

    const recentPosts = [
        {
            id: 1,
            title: 'Getting Started with React Hooks',
            category: 'Technology',
            views: 234,
            likes: 45,
            comments: 12,
            date: '2024-12-15',
            status: 'published'
        },
        {
            id: 2,
            title: 'The Future of Web Development',
            category: 'Technology',
            views: 189,
            likes: 32,
            comments: 8,
            date: '2024-12-14',
            status: 'published'
        },
        {
            id: 3,
            title: 'Travel Guide: Hidden Gems',
            category: 'Travel',
            views: 156,
            likes: 28,
            comments: 5,
            date: '2024-12-13',
            status: 'draft'
        }
    ];

    return (
        <div className="home-container">
            {/* Welcome Section */}
            <div className="welcome-section">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h2 className="welcome-title">Welcome back, John! 👋</h2>
                        <p className="welcome-subtitle">Ready to share your thoughts with the world?</p>
                    </div>
                    <div className="col-md-4 text-end">
                        <button className="btn btn-primary btn-lg">
                            <i className="fas fa-plus me-2"></i>New Post
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-section">
                <div className="row">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="stat-card">
                                <div className="stat-icon">
                                    <i className={`${stat.icon} text-${stat.color}`}></i>
                                </div>
                                <div className="stat-content">
                                    <h3 className="stat-value">{stat.value}</h3>
                                    <p className="stat-label">{stat.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="row">
                <div className="col-lg-8">
                    <div className="recent-posts-section">
                        <div className="section-header">
                            <h4 className="section-title">Recent Posts</h4>
                            <a href="#" className="btn btn-sm btn-outline-primary">View All</a>
                        </div>
                        <div className="posts-list">
                            {recentPosts.map((post) => (
                                <div key={post.id} className="post-item">
                                    <div className="post-content">
                                        <h5 className="post-title">{post.title}</h5>
                                        <div className="post-meta">
                                            <span className="category-badge">{post.category}</span>
                                            <span className="post-date">{post.date}</span>
                                            <span className={`status-badge ${post.status}`}>
                                                {post.status}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="post-stats">
                                        <div className="stat-item">
                                            <i className="fas fa-eye"></i>
                                            <span>{post.views}</span>
                                        </div>
                                        <div className="stat-item">
                                            <i className="fas fa-heart"></i>
                                            <span>{post.likes}</span>
                                        </div>
                                        <div className="stat-item">
                                            <i className="fas fa-comments"></i>
                                            <span>{post.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="quick-actions-section">
                        <div className="section-header">
                            <h4 className="section-title">Quick Actions</h4>
                        </div>
                        <div className="quick-actions">
                            <button className="quick-action-btn">
                                <i className="fas fa-plus-circle"></i>
                                <span>Create New Post</span>
                            </button>
                            <button className="quick-action-btn">
                                <i className="fas fa-edit"></i>
                                <span>Edit Draft</span>
                            </button>
                            <button className="quick-action-btn">
                                <i className="fas fa-chart-line"></i>
                                <span>View Analytics</span>
                            </button>
                            <button className="quick-action-btn">
                                <i className="fas fa-cog"></i>
                                <span>Settings</span>
                            </button>
                        </div>
                    </div>

                    <div className="recent-activity-section mt-4">
                        <div className="section-header">
                            <h4 className="section-title">Recent Activity</h4>
                        </div>
                        <div className="activity-list">
                            <div className="activity-item">
                                <i className="fas fa-heart text-danger"></i>
                                <div className="activity-content">
                                    <p>Sarah liked your post "React Hooks"</p>
                                    <small>2 minutes ago</small>
                                </div>
                            </div>
                            <div className="activity-item">
                                <i className="fas fa-comment text-primary"></i>
                                <div className="activity-content">
                                    <p>Mike commented on "Web Development"</p>
                                    <small>15 minutes ago</small>
                                </div>
                            </div>
                            <div className="activity-item">
                                <i className="fas fa-eye text-success"></i>
                                <div className="activity-content">
                                    <p>Your post reached 100 views</p>
                                    <small>1 hour ago</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
