import React from 'react';

const BlogCard = ({ title, excerpt, author, date, category, readTime, image }) => {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0 blog-card">
                <div className="card-img-top blog-card-image">
                    {image ? (
                        <img src={image} alt={title} className="img-fluid" />
                    ) : (
                        <div className="placeholder-image">
                            <i className="fas fa-image"></i>
                        </div>
                    )}
                    <div className="card-overlay">
                        <span className="badge bg-primary rounded-pill category-badge">{category}</span>
                    </div>
                </div>
                <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <small className="text-muted">
                            <i className="fas fa-clock me-1"></i>{readTime} min read
                        </small>
                        <button className="btn btn-sm btn-outline-secondary bookmark-btn">
                            <i className="far fa-bookmark"></i>
                        </button>
                    </div>
                    <h5 className="card-title mb-3">{title}</h5>
                    <p className="card-text text-muted mb-3 flex-grow-1">{excerpt}</p>
                    <div className="mt-auto">
                        <hr className="my-3" />
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <div className="avatar-circle me-2">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div>
                                    <small className="text-dark fw-medium">{author}</small>
                                    <br />
                                    <small className="text-muted">{date}</small>
                                </div>
                            </div>
                            <button className="btn btn-sm btn-primary">
                                Read More <i className="fas fa-arrow-right ms-1"></i>
                            </button>
                        </div>
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
            excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components. This comprehensive guide covers useState, useEffect, and custom hooks.",
            author: "John Doe",
            date: "Dec 15, 2024",
            category: "Technology",
            readTime: 5,
            image: null
        },
        {
            title: "The Future of Web Development",
            excerpt: "Exploring emerging trends and technologies that will shape the future of web development. From AI integration to new frameworks and tools.",
            author: "Jane Smith",
            date: "Dec 14, 2024",
            category: "Technology",
            readTime: 8,
            image: null
        },
        {
            title: "Travel Guide: Hidden Gems of Europe",
            excerpt: "Discover amazing places in Europe that most tourists never visit but absolutely should. From secret beaches to mountain villages.",
            author: "Mike Johnson",
            date: "Dec 13, 2024",
            category: "Travel",
            readTime: 6,
            image: null
        },
        {
            title: "Healthy Living in the Digital Age",
            excerpt: "Tips and strategies for maintaining physical and mental health while working with technology. Balance screen time with real-world activities.",
            author: "Sarah Wilson",
            date: "Dec 12, 2024",
            category: "Lifestyle",
            readTime: 7,
            image: null
        },
        {
            title: "Mastering CSS Grid Layout",
            excerpt: "A comprehensive guide to CSS Grid and how to create responsive layouts with ease. Learn the fundamentals and advanced techniques.",
            author: "Alex Brown",
            date: "Dec 11, 2024",
            category: "Technology",
            readTime: 10,
            image: null
        },
        {
            title: "Mindful Photography: Capturing Moments",
            excerpt: "Learn how to take better photos by being more present and mindful in your approach. Focus on composition, lighting, and storytelling.",
            author: "Emma Davis",
            date: "Dec 10, 2024",
            category: "Lifestyle",
            readTime: 4,
            image: null
        },
        {
            title: "Building Scalable Node.js Applications",
            excerpt: "Best practices for building scalable backend applications with Node.js. From architecture patterns to performance optimization.",
            author: "David Wilson",
            date: "Dec 9, 2024",
            category: "Technology",
            readTime: 12,
            image: null
        },
        {
            title: "Digital Marketing Strategies for 2024",
            excerpt: "Effective digital marketing strategies that work in today's landscape. Social media, SEO, and content marketing insights.",
            author: "Lisa Chen",
            date: "Dec 8, 2024",
            category: "Business",
            readTime: 8,
            image: null
        },
        {
            title: "Sustainable Living Made Simple",
            excerpt: "Easy ways to incorporate sustainable practices into your daily life. Small changes that make a big environmental impact.",
            author: "Tom Green",
            date: "Dec 7, 2024",
            category: "Lifestyle",
            readTime: 6,
            image: null
        }
    ];

    return (
        <div className="blog-grid-container">
            <div className="mb-4">
                <h2 className="h3 fw-bold mb-3">Latest Blog Posts</h2>
                <p className="text-muted">Discover our most recent stories and insights</p>
            </div>
            <div className="row">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </div>
            <div className="row mt-4">
                <div className="col-12 text-center">
                    <button className="btn btn-outline-primary btn-lg">
                        Load More Posts <i className="fas fa-chevron-down ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogGrid;
