import React, { useState } from 'react';

const CreateBlogForm = () => {
    const [blogData, setBlogData] = useState({
        title: '',
        content: '',
        author: '',
        image: null
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBlogData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBlogData(prev => ({
                ...prev,
                image: file
            }));

            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
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
                image: null
            });
            setImagePreview(null);

            // Hide success message after 3 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        }, 1000);
    };

    const isFormValid = blogData.title.trim() && blogData.content.trim() && blogData.author.trim();

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-11">
                    {showSuccess && (
                        <div className="alert alert-success alert-dismissible fade show mb-4" role="alert">
                            <div className="d-flex align-items-center">
                                <i className="bi bi-check-circle-fill me-2 fs-4"></i>
                                <div>
                                    <strong>Success!</strong> Your blog has been created successfully!
                                </div>
                            </div>
                            <button type="button" className="btn-close" onClick={() => setShowSuccess(false)}></button>
                        </div>
                    )}

                    <div className="row g-4">
                        {/* Form Section */}
                        <div className="col-lg-7">
                            <div className="card border-0 shadow-lg h-100">
                                <div className="card-header bg-gradient text-white" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                                    <h3 className="mb-0 fw-bold">
                                        <i className="bi bi-pencil-square me-2"></i>
                                        Create New Blog Post
                                    </h3>
                                    <p className="mb-0 mt-1 opacity-75">Share your thoughts with the world</p>
                                </div>

                                <div className="card-body p-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label htmlFor="title" className="form-label fw-bold text-dark">
                                                <i className="bi bi-type-h1 me-2 text-primary"></i>
                                                Blog Title *
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg border-2"
                                                id="title"
                                                name="title"
                                                value={blogData.title}
                                                onChange={handleInputChange}
                                                placeholder="Enter a captivating title for your blog..."
                                                required
                                                style={{ borderRadius: '12px' }}
                                            />
                                        </div>

                                        <div className="row mb-4">
                                            <div className="col-md-6">
                                                <label htmlFor="author" className="form-label fw-bold text-dark">
                                                    <i className="bi bi-person-circle me-2 text-primary"></i>
                                                    Author Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control border-2"
                                                    id="author"
                                                    name="author"
                                                    value={blogData.author}
                                                    onChange={handleInputChange}
                                                    placeholder="Your name"
                                                    required
                                                    style={{ borderRadius: '12px' }}
                                                />
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="image" className="form-label fw-bold text-dark">
                                                    <i className="bi bi-image me-2 text-primary"></i>
                                                    Featured Image
                                                </label>
                                                <input
                                                    type="file"
                                                    className="form-control border-2"
                                                    id="image"
                                                    name="image"
                                                    onChange={handleImageChange}
                                                    accept="image/*"
                                                    style={{ borderRadius: '12px' }}
                                                />
                                                <div className="form-text">
                                                    <i className="bi bi-info-circle me-1"></i>
                                                    Upload an image (JPG, PNG, GIF)
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label htmlFor="content" className="form-label fw-bold text-dark">
                                                <i className="bi bi-textarea-t me-2 text-primary"></i>
                                                Blog Content *
                                            </label>
                                            <textarea
                                                className="form-control border-2"
                                                id="content"
                                                name="content"
                                                rows="12"
                                                value={blogData.content}
                                                onChange={handleInputChange}
                                                placeholder="Write your amazing content here... Share your insights, experiences, and knowledge with your readers."
                                                required
                                                style={{ borderRadius: '12px', resize: 'vertical' }}
                                            ></textarea>
                                            <div className="d-flex justify-content-between form-text">
                                                <span>
                                                    <i className="bi bi-chat-text me-1"></i>
                                                    {blogData.content.length} characters
                                                </span>
                                                <span className="text-muted">
                                                    {blogData.content.split(' ').filter(word => word.length > 0).length} words
                                                </span>
                                            </div>
                                        </div>

                                        <div className="d-grid gap-2">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg fw-bold"
                                                disabled={!isFormValid || isSubmitting}
                                                style={{ borderRadius: '12px', padding: '12px 24px' }}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                        Publishing Blog...
                                                    </>
                                                ) : (
                                                    <>
                                                        <i className="bi bi-rocket-takeoff me-2"></i>
                                                        Publish Blog Post
                                                    </>
                                                )}
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() => {
                                                    setBlogData({ title: '', content: '', author: '', image: null });
                                                    setImagePreview(null);
                                                }}
                                                disabled={isSubmitting}
                                                style={{ borderRadius: '12px' }}
                                            >
                                                <i className="bi bi-arrow-clockwise me-2"></i>
                                                Reset Form
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Preview Section */}
                        <div className="col-lg-5">
                            <div className="card border-0 shadow-lg h-100">
                                <div className="card-header bg-light border-0">
                                    <h5 className="mb-0 fw-bold text-dark">
                                        <i className="bi bi-eye me-2 text-info"></i>
                                        Live Preview
                                    </h5>
                                </div>
                                <div className="card-body p-4" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                                    {!blogData.title && !blogData.content && !blogData.author && !imagePreview ? (
                                        <div className="text-center py-5">
                                            <i className="bi bi-eye-slash display-1 text-muted opacity-50"></i>
                                            <p className="text-muted mt-3">
                                                Start writing to see your preview
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="preview-content">
                                            {imagePreview && (
                                                <div className="mb-3">
                                                    <img
                                                        src={imagePreview}
                                                        alt="Preview"
                                                        className="img-fluid rounded shadow-sm"
                                                        style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            )}

                                            {blogData.title && (
                                                <h3 className="text-primary fw-bold mb-3" style={{ lineHeight: '1.3' }}>
                                                    {blogData.title}
                                                </h3>
                                            )}

                                            {blogData.author && (
                                                <div className="d-flex align-items-center mb-4">
                                                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2"
                                                        style={{ width: '40px', height: '40px' }}>
                                                        <i className="bi bi-person-fill text-white"></i>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-bold text-dark">By {blogData.author}</p>
                                                        <small className="text-muted">
                                                            <i className="bi bi-calendar3 me-1"></i>
                                                            {new Date().toLocaleDateString()}
                                                        </small>
                                                    </div>
                                                </div>
                                            )}

                                            {blogData.content && (
                                                <div className="content-preview bg-light p-3 rounded">
                                                    {blogData.content.split('\n').map((paragraph, index) => (
                                                        paragraph.trim() && (
                                                            <p key={index} className="mb-2 text-dark" style={{ lineHeight: '1.6' }}>
                                                                {paragraph}
                                                            </p>
                                                        )
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBlogForm;
