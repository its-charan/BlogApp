import React from 'react';

const BlogCard = ({ title, excerpt, author, date, category, readTime }) => {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge bg-primary rounded-pill">{category}</span>
                        <small className="text-muted">{readTime} min read</small>
                    </div>
                    <h5 className="card-title mb-3">{title}</h5>
                    <p className="card-text text-muted mb-3">{excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <div className="avatar-circle me-2">
                                <i className="fas fa-user"></i>
                            </div>
                            <div>
                                <small className="text-muted">by {author}</small>
                                <br />
                                <small className="text-muted">{date}</small>
                            </div>
                        </div>
                        <button className="btn btn-sm btn-outline-primary">
                            Read More <i className="fas fa-arrow-right ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BlogGrid = () => {
    const blogs = [
        {
            title: "Getting Started with React Hooks",
            excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components.",
            author: "John Doe",
            date: "Dec 15, 2024",
            category: "Technology",
            readTime: 5
        },
        {
            title: "The Future of Web Development",
            excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
            author: "Jane Smith",
            date: "Dec 14, 2024",
            category: "Technology",
            readTime: 8
        },
        {
            title: "Travel Guide: Hidden Gems of Europe",
            excerpt: "Discover amazing places in Europe that most tourists never visit but absolutely should.",
            author: "Mike Johnson",
            date: "Dec 13, 2024",
            category: "Travel",
            readTime: 6
        },
        {
            title: "Healthy Living in the Digital Age",
            excerpt: "Tips and strategies for maintaining physical and mental health while working with technology.",
            author: "Sarah Wilson",
            date: "Dec 12, 2024",
            category: "Lifestyle",
            readTime: 7
        },
        {
            title: "Mastering CSS Grid Layout",
            excerpt: "A comprehensive guide to CSS Grid and how to create responsive layouts with ease.",
            author: "Alex Brown",
            date: "Dec 11, 2024",
            category: "Technology",
            readTime: 10
        },
        {
            title: "Mindful Photography: Capturing Moments",
            excerpt: "Learn how to take better photos by being more present and mindful in your approach.",
            author: "Emma Davis",
            date: "Dec 10, 2024",
            category: "Lifestyle",
            readTime: 4
        }
    ];

    return (
        <section className="py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="display-6 fw-bold mb-3">Latest Blog Posts</h2>
                        <p className="text-muted">Discover our most recent stories and insights</p>
                    </div>
                </div>
                <div className="row">
                    {blogs.map((blog, index) => (
                        <BlogCard key={index} {...blog} />
                    ))}
                </div>
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <button className="btn btn-primary btn-lg">
                            Load More Posts <i className="fas fa-chevron-down ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogGrid;
