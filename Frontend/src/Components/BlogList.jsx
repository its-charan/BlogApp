import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Sample blog data - replace with actual API call
    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setBlogs([
                {
                    id: 1,
                    title: "Getting Started with React",
                    content: "React is a powerful JavaScript library for building user interfaces. In this blog, we'll explore the fundamentals of React and how to create your first component.",
                    author: "John Doe",
                    date: "2024-01-15",
                    image: "https://via.placeholder.com/300x200/007bff/ffffff?text=React"
                },
                {
                    id: 2,
                    title: "Understanding Node.js and Express",
                    content: "Node.js has revolutionized server-side JavaScript development. Learn how to build robust backend applications using Express framework.",
                    author: "Jane Smith",
                    date: "2024-01-10",
                    image: "https://via.placeholder.com/300x200/28a745/ffffff?text=Node.js"
                },
                {
                    id: 3,
                    title: "MongoDB: A NoSQL Database Guide",
                    content: "Discover the power of MongoDB, a document-based NoSQL database. Learn how to design schemas and perform efficient queries.",
                    author: "Mike Johnson",
                    date: "2024-01-05",
                    image: "https://via.placeholder.com/300x200/17a2b8/ffffff?text=MongoDB"
                },
                {
                    id: 4,
                    title: "Bootstrap 5: Responsive Design Made Easy",
                    content: "Bootstrap 5 brings new features and improvements to responsive web design. Learn how to create beautiful, mobile-first websites.",
                    author: "Sarah Wilson",
                    date: "2024-01-01",
                    image: "https://via.placeholder.com/300x200/6f42c1/ffffff?text=Bootstrap"
                }
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3 text-muted">Loading blogs...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-12">
                    <h2 className="fw-bold text-primary mb-3">
                        <i className="bi bi-journal-text me-2"></i>All Blogs
                    </h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i className="bi bi-search"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search blogs..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <span className="badge bg-secondary fs-6">
                                {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''} found
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {filteredBlogs.length === 0 ? (
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body py-5">
                                <i className="bi bi-search display-1 text-muted"></i>
                                <h4 className="mt-3">No blogs found</h4>
                                <p className="text-muted">
                                    {searchTerm ? `No blogs match "${searchTerm}"` : 'No blogs available'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row g-4">
                    {filteredBlogs.map(blog => (
                        <div key={blog.id} className="col-lg-4 col-md-6">
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogList;
