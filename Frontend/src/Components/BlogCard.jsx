import React from 'react';

const BlogCard = ({ blog }) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const truncateContent = (content, maxLength = 120) => {
        if (content.length <= maxLength) return content;
        return content.substring(0, maxLength) + '...';
    };

    return (
        <div className="card h-100 shadow-sm border-0 hover-shadow">
            <div className="position-relative">
                <img 
                    src={blog.image} 
                    className="card-img-top" 
                    alt={blog.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 end-0 p-2">
                    <span className="badge bg-primary">
                        <i className="bi bi-calendar3 me-1"></i>
                        {formatDate(blog.date)}
                    </span>
                </div>
            </div>
            
            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-primary mb-2">
                    {blog.title}
                </h5>
                
                <p className="card-text text-muted flex-grow-1 mb-3">
                    {truncateContent(blog.content)}
                </p>
                
                <div className="mt-auto">
                    <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2" 
                             style={{ width: '32px', height: '32px' }}>
                            <i className="bi bi-person-fill text-white"></i>
                        </div>
                        <small className="text-muted">
                            By <strong>{blog.author}</strong>
                        </small>
                    </div>
                    
                    <div className="d-flex gap-2">
                        <button className="btn btn-primary btn-sm flex-fill">
                            <i className="bi bi-eye me-1"></i>
                            Read More
                        </button>
                        <button className="btn btn-outline-secondary btn-sm">
                            <i className="bi bi-heart"></i>
                        </button>
                        <button className="btn btn-outline-secondary btn-sm">
                            <i className="bi bi-share"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
