import React from 'react';

const Cards = () => {
    const blogs = [
        {
            title: "Mastering JavaScript in 2025",
            about: "A complete guide to modern JavaScript features and real-world use cases.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
            authorName: "Charan Charan",
            hashtags: ["#JavaScript", "#WebDev", "#ES6"],
            likes: 120,
            createdAt: "2025-07-09T10:30:00Z"
        },
        {
            title: "React.js with Tailwind CSS: Best Practices",
            about: "Learn how to efficiently style React components using Tailwind CSS.",
            image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
            authorName: "Emily Watson",
            hashtags: ["#React", "#TailwindCSS", "#Frontend"],
            likes: 85,
            createdAt: "2025-07-08T14:45:00Z"
        },
        {
            title: "Building REST APIs with FastAPI",
            about: "Why FastAPI is the future of Python backend development.",
            image: "https://images.unsplash.com/photo-1581091012184-5c8f5b0b0575",
            authorName: "Rahul Mehta",
            hashtags: ["#Python", "#FastAPI", "#Backend"],
            likes: 67,
            createdAt: "2025-07-07T09:00:00Z"
        },
        {
            title: "Getting Started with Docker for Developers",
            about: "Learn how to containerize your applications the right way.",
            image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
            authorName: "Sara Khan",
            likes: 102,
            createdAt: "2025-07-06T16:20:00Z"
        },
        {
            title: "Top 10 VS Code Extensions in 2025",
            about: "Boost your productivity with these essential VS Code extensions.",
            image: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
            authorName: "David Smith",
            hashtags: ["#VSCode", "#Productivity", "#Coding"],
            likes: 95,
            createdAt: "2025-07-05T11:10:00Z"
        }
    ];
    return (
        <div className="container-fluid px-0" style={{ minHeight: '100vh' }}>
            <div className="p-4">
                <div className="row g-4">
                    {blogs.map((card, index) => {
                        return (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="card h-100">
                                    <img src={card.image} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{card.title}</h5>
                                        <p className="card-text flex-grow-1">{card.about}</p>

                                        <div className="mt-auto">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <small className="text-muted">
                                                    <i className="bi bi-person-circle me-1"></i>
                                                    {card.authorName}
                                                </small>
                                                <small className="text-muted">
                                                    <i className="bi bi-heart me-1"></i>
                                                    {card.likes}
                                                </small>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <small className="text-muted">
                                                    <i className="bi bi-clock me-1"></i>
                                                    {new Date(card.createdAt).toLocaleDateString()}
                                                </small>
                                                {card.hashtags && (
                                                    <div>
                                                        {card.hashtags.slice(0, 2).map((tag, i) => (
                                                            <span key={i} className="badge bg-secondary me-1" style={{ fontSize: '0.7rem' }}>
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            <a href="#" className="btn btn-primary w-100">ReadMore</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Cards;
