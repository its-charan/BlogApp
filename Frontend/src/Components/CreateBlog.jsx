import React, { useState } from 'react';

const CreateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        content: '',
        tags: '',
        featuredImage: null
    });

    const [preview, setPreview] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            featuredImage: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const categories = [
        'Technology',
        'Lifestyle',
        'Travel',
        'Business',
        'Health',
        'Education',
        'Food',
        'Sports',
        'Entertainment',
        'Science'
    ];

    return (
        <div className="create-blog-container">
            <div className="mb-4">
                <h2 className="h3 fw-bold mb-3">Create New Blog Post</h2>
                <p className="text-muted">Share your thoughts and stories with the world</p>
            </div>

            <div className="row">
                <div className="col-lg-8">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="title" className="form-label fw-semibold">
                                        Blog Title <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        placeholder="Enter an engaging title for your blog post"
                                        required
                                    />
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <label htmlFor="category" className="form-label fw-semibold">
                                            Category <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            className="form-select"
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="tags" className="form-label fw-semibold">
                                            Tags
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="tags"
                                            name="tags"
                                            value={formData.tags}
                                            onChange={handleInputChange}
                                            placeholder="Enter tags separated by commas"
                                        />
                                        <small className="form-text text-muted">
                                            Example: react, javascript, tutorial
                                        </small>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="featuredImage" className="form-label fw-semibold">
                                        Featured Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="featuredImage"
                                        name="featuredImage"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                    />
                                    {formData.featuredImage && (
                                        <div className="mt-2">
                                            <small className="text-success">
                                                <i className="fas fa-check me-1"></i>
                                                Image selected: {formData.featuredImage.name}
                                            </small>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="content" className="form-label fw-semibold">
                                        Content <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="content"
                                        name="content"
                                        value={formData.content}
                                        onChange={handleInputChange}
                                        rows="12"
                                        placeholder="Write your blog content here..."
                                        required
                                    />
                                    <small className="form-text text-muted">
                                        You can use Markdown formatting
                                    </small>
                                </div>

                                <div className="d-flex gap-3">
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        <i className="fas fa-save me-2"></i>
                                        Publish Post
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg">
                                        <i className="fas fa-file-alt me-2"></i>
                                        Save as Draft
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-info btn-lg"
                                        onClick={() => setPreview(!preview)}
                                    >
                                        <i className="fas fa-eye me-2"></i>
                                        {preview ? 'Edit' : 'Preview'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card shadow-sm border-0 mb-4">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="fas fa-lightbulb text-warning me-2"></i>
                                Writing Tips
                            </h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <i className="fas fa-check text-success me-2"></i>
                                    Start with a compelling headline
                                </li>
                                <li className="mb-2">
                                    <i className="fas fa-check text-success me-2"></i>
                                    Use clear and concise language
                                </li>
                                <li className="mb-2">
                                    <i className="fas fa-check text-success me-2"></i>
                                    Add relevant images and media
                                </li>
                                <li className="mb-2">
                                    <i className="fas fa-check text-success me-2"></i>
                                    Structure with headings and bullets
                                </li>
                                <li className="mb-0">
                                    <i className="fas fa-check text-success me-2"></i>
                                    End with a strong conclusion
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="fas fa-chart-line text-info me-2"></i>
                                SEO Tips
                            </h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <small className="text-muted">• Use keywords naturally</small>
                                </li>
                                <li className="mb-2">
                                    <small className="text-muted">• Add relevant tags</small>
                                </li>
                                <li className="mb-2">
                                    <small className="text-muted">• Write meta descriptions</small>
                                </li>
                                <li className="mb-0">
                                    <small className="text-muted">• Optimize images</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {preview && (
                <div className="mt-5">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h3 className="mb-3">Preview</h3>
                            <div className="preview-content">
                                <h2 className="mb-3">{formData.title || 'Your Blog Title'}</h2>
                                <div className="mb-3">
                                    <span className="badge bg-primary me-2">{formData.category || 'Category'}</span>
                                    {formData.tags && (
                                        <span className="text-muted">
                                            Tags: {formData.tags}
                                        </span>
                                    )}
                                </div>
                                <div className="content-preview">
                                    {formData.content ? (
                                        <div style={{ whiteSpace: 'pre-wrap' }}>
                                            {formData.content}
                                        </div>
                                    ) : (
                                        <p className="text-muted">Your blog content will appear here...</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateBlog;
