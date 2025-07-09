import React, { useState } from 'react';

const CreateBlogForm = () => {
    const [blogData, setBlogData] = useState({
        title: '',
        content: '',
        author: '',
        image: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            console.log('Blog created:', blogData);
            setIsSubmitting(false);
            setShowSuccess(true);
            
            // Reset form
            setBlogData({
                title: '',
                content: '',
                author: '',
                image: ''
            });

            // Hide success message after 3 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        }, 1000);
    };

    const isFormValid = blogData.title.trim() && blogData.content.trim() && blogData.author.trim();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">
                                <i className="bi bi-plus-circle me-2"></i>
                                Create New Blog
                            </h3>
                        </div>
                        
                        <div className="card-body p-4">
                            {showSuccess && (
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <i className="bi bi-check-circle me-2"></i>
                                    Blog created successfully!
                                    <button type="button" className="btn-close" onClick={() => setShowSuccess(false)}></button>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label fw-bold">
                                        <i className="bi bi-type me-1"></i>
                                        Blog Title *
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="title"
                                        name="title"
                                        value={blogData.title}
                                        onChange={handleInputChange}
                                        placeholder="Enter an engaging blog title..."
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="author" className="form-label fw-bold">
                                        <i className="bi bi-person me-1"></i>
                                        Author Name *
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="author"
                                        name="author"
                                        value={blogData.author}
                                        onChange={handleInputChange}
                                        placeholder="Enter author name..."
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label fw-bold">
                                        <i className="bi bi-image me-1"></i>
                                        Featured Image URL (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        value={blogData.image}
                                        onChange={handleInputChange}
                                        placeholder="https://example.com/image.jpg"
                                    />
                                    <div className="form-text">
                                        Add a URL to an image that represents your blog post
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="content" className="form-label fw-bold">
                                        <i className="bi bi-text-paragraph me-1"></i>
                                        Blog Content *
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="content"
                                        name="content"
                                        rows="10"
                                        value={blogData.content}
                                        onChange={handleInputChange}
                                        placeholder="Write your blog content here..."
                                        required
                                    ></textarea>
                                    <div className="form-text">
                                        {blogData.content.length} characters
                                    </div>
                                </div>

                                <div className="d-flex gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg flex-fill"
                                        disabled={!isFormValid || isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                Creating Blog...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-save me-2"></i>
                                                Publish Blog
                                            </>
                                        )}
                                    </button>
                                    
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary btn-lg"
                                        onClick={() => setBlogData({ title: '', content: '', author: '', image: '' })}
                                        disabled={isSubmitting}
                                    >
                                        <i className="bi bi-arrow-clockwise me-2"></i>
                                        Reset
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Preview Section */}
                    {(blogData.title || blogData.content) && (
                        <div className="card mt-4 shadow-sm border-0">
                            <div className="card-header bg-light">
                                <h5 className="mb-0">
                                    <i className="bi bi-eye me-2"></i>
                                    Preview
                                </h5>
                            </div>
                            <div className="card-body">
                                {blogData.title && (
                                    <h4 className="text-primary fw-bold mb-3">{blogData.title}</h4>
                                )}
                                {blogData.author && (
                                    <p className="text-muted mb-3">
                                        <i className="bi bi-person me-1"></i>
                                        By {blogData.author}
                                    </p>
                                )}
                                {blogData.image && (
                                    <img 
                                        src={blogData.image} 
                                        alt="Preview" 
                                        className="img-fluid rounded mb-3"
                                        style={{ maxHeight: '200px' }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                )}
                                {blogData.content && (
                                    <div className="content-preview">
                                        {blogData.content.split('\n').map((paragraph, index) => (
                                            <p key={index} className="mb-2">{paragraph}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreateBlogForm;
