import React, { useState } from 'react';

const CreateNewBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        content: '',
        tags: '',
        featuredImage: null,
        status: 'draft'
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
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const categories = [
        'Technology', 'Lifestyle', 'Travel', 'Food', 'Health', 'Fashion', 
        'Sports', 'Entertainment', 'Education', 'Business'
    ];

    return (
        <div className="create-blog-container">
            <div className="create-blog-header">
                <h2 className="page-title">Create New Blog Post</h2>
                <div className="header-actions">
                    <button 
                        className="btn btn-outline-secondary me-2"
                        onClick={() => setPreview(!preview)}
                    >
                        <i className="fas fa-eye me-1"></i>
                        {preview ? 'Edit' : 'Preview'}
                    </button>
                    <button className="btn btn-outline-primary me-2">
                        <i className="fas fa-save me-1"></i>Save Draft
                    </button>
                    <button className="btn btn-primary">
                        <i className="fas fa-paper-plane me-1"></i>Publish
                    </button>
                </div>
            </div>

            {!preview ? (
                <form onSubmit={handleSubmit} className="create-blog-form">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="form-card">
                                <div className="form-group">
                                    <label htmlFor="title" className="form-label">
                                        Blog Title <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        className="form-control form-control-lg"
                                        placeholder="Enter your blog title..."
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="content" className="form-label">
                                        Content <span className="required">*</span>
                                    </label>
                                    <div className="editor-toolbar">
                                        <div className="toolbar-group">
                                            <button type="button" className="toolbar-btn" title="Bold">
                                                <i className="fas fa-bold"></i>
                                            </button>
                                            <button type="button" className="toolbar-btn" title="Italic">
                                                <i className="fas fa-italic"></i>
                                            </button>
                                            <button type="button" className="toolbar-btn" title="Underline">
                                                <i className="fas fa-underline"></i>
                                            </button>
                                        </div>
                                        <div className="toolbar-group">
                                            <button type="button" className="toolbar-btn" title="Heading">
                                                <i className="fas fa-heading"></i>
                                            </button>
                                            <button type="button" className="toolbar-btn" title="List">
                                                <i className="fas fa-list"></i>
                                            </button>
                                            <button type="button" className="toolbar-btn" title="Link">
                                                <i className="fas fa-link"></i>
                                            </button>
                                        </div>
                                        <div className="toolbar-group">
                                            <button type="button" className="toolbar-btn" title="Image">
                                                <i className="fas fa-image"></i>
                                            </button>
                                            <button type="button" className="toolbar-btn" title="Code">
                                                <i className="fas fa-code"></i>
                                            </button>
                                            <button type="button" className="toolbar-btn" title="Quote">
                                                <i className="fas fa-quote-left"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <textarea
                                        id="content"
                                        name="content"
                                        className="form-control content-editor"
                                        rows="15"
                                        placeholder="Write your blog content here..."
                                        value={formData.content}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="form-card">
                                <h5 className="card-title">Post Settings</h5>
                                
                                <div className="form-group">
                                    <label htmlFor="category" className="form-label">
                                        Category <span className="required">*</span>
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="form-select"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="tags" className="form-label">Tags</label>
                                    <input
                                        type="text"
                                        id="tags"
                                        name="tags"
                                        className="form-control"
                                        placeholder="Enter tags separated by commas"
                                        value={formData.tags}
                                        onChange={handleInputChange}
                                    />
                                    <small className="text-muted">
                                        Tags help readers find your content
                                    </small>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="featuredImage" className="form-label">
                                        Featured Image
                                    </label>
                                    <div className="image-upload">
                                        <input
                                            type="file"
                                            id="featuredImage"
                                            name="featuredImage"
                                            className="form-control"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                        />
                                        {formData.featuredImage && (
                                            <div className="image-preview">
                                                <img 
                                                    src={URL.createObjectURL(formData.featuredImage)}
                                                    alt="Preview"
                                                    className="preview-image"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select
                                        id="status"
                                        name="status"
                                        className="form-select"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                        <option value="scheduled">Scheduled</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-card">
                                <h5 className="card-title">SEO Settings</h5>
                                
                                <div className="form-group">
                                    <label htmlFor="metaTitle" className="form-label">Meta Title</label>
                                    <input
                                        type="text"
                                        id="metaTitle"
                                        name="metaTitle"
                                        className="form-control"
                                        placeholder="SEO title for search engines"
                                        maxLength="60"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="metaDescription" className="form-label">Meta Description</label>
                                    <textarea
                                        id="metaDescription"
                                        name="metaDescription"
                                        className="form-control"
                                        rows="3"
                                        placeholder="Brief description for search engines"
                                        maxLength="160"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="preview-container">
                    <div className="preview-content">
                        <h1 className="preview-title">{formData.title || 'Blog Title'}</h1>
                        <div className="preview-meta">
                            <span className="category-badge">{formData.category || 'Category'}</span>
                            <span className="author-info">By John Doe</span>
                            <span className="date-info">{new Date().toLocaleDateString()}</span>
                        </div>
                        {formData.featuredImage && (
                            <div className="featured-image-container">
                                <img 
                                    src={URL.createObjectURL(formData.featuredImage)}
                                    alt="Featured"
                                    className="featured-image"
                                />
                            </div>
                        )}
                        <div className="preview-body">
                            {formData.content ? (
                                <div className="content-preview">
                                    {formData.content.split('\n').map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-muted">Your blog content will appear here...</p>
                            )}
                        </div>
                        {formData.tags && (
                            <div className="tags-preview">
                                <strong>Tags: </strong>
                                {formData.tags.split(',').map((tag, index) => (
                                    <span key={index} className="tag-badge">{tag.trim()}</span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateNewBlog;
