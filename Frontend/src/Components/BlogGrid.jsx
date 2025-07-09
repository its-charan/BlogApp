import React, { useState, useEffect } from 'react';

const BlogGrid = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Sample blog data
    useEffect(() => {
        setTimeout(() => {
            setBlogs([
                {
                    id: 1,
                    blogTitle: "Getting Started with React",
                    blogContent: "React is a powerful JavaScript library for building user interfaces. In this blog, we'll explore the fundamentals of React and how to create your first component.",
                    authorName: "John Doe",
                    createdAt: "2024-01-15"
                },
                {
                    id: 2,
                    blogTitle: "Understanding Node.js",
                    blogContent: "Node.js has revolutionized server-side JavaScript development. Learn how to build robust backend applications.",
                    authorName: "Jane Smith",
                    createdAt: "2024-01-10"
                },
                {
                    id: 3,
                    blogTitle: "MongoDB Database Guide",
                    blogContent: "Discover the power of MongoDB, a document-based NoSQL database. Learn how to design schemas and perform queries.",
                    authorName: "Mike Johnson",
                    createdAt: "2024-01-05"
                }
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading blogs...</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="mb-4 text-primary">All Blogs</h2>
            <div className="row g-4">
                {blogs.map(blog => (
                    <div key={blog.id} className="col-lg-4 col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title text-primary">{blog.blogTitle}</h5>
                                <p className="card-text">{blog.blogContent.substring(0, 100)}...</p>
                                <small className="text-muted">By {blog.authorName}</small>
                                <br />
                                <small className="text-muted">{new Date(blog.createdAt).toLocaleDateString()}</small>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary btn-sm">Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogGrid;