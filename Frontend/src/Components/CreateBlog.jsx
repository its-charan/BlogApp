import React, { useState } from 'react';

const CreateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        about: '',
        authorName: '',
        image: null,
        hashtags: '',
        blogContent: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            image: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Blog Data:', formData);
        // Here you would typically send the data to your backend
        alert('Blog created successfully!');

        // Reset form
        setFormData({
            title: '',
            about: '',
            authorName: '',
            image: null,
            hashtags: '',
            blogContent: ''
        });
    };

    return (
        <div className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-12">
                    <div className="p-4">
                        <div className="card shadow-lg border-0">
                            <div className="card-header bg-primary text-white py-3">
                                <h3 className="mb-0 text-center">
                                    <i className="bi bi-pencil-square me-2"></i>
                                    Create New Blog
                                </h3>
                            </div>
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label className="form-label fw-bold">Blog Title</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="title"
                                                value={formData.title}
                                                onChange={handleInputChange}
                                                placeholder="Enter blog title..."
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label className="form-label fw-bold">About (Short Description)</label>
                                            <textarea
                                                className="form-control"
                                                name="about"
                                                rows="3"
                                                value={formData.about}
                                                onChange={handleInputChange}
                                                placeholder="Brief description of your blog..."
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold">Author Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="authorName"
                                                value={formData.authorName}
                                                onChange={handleInputChange}
                                                placeholder="Your name..."
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-bold">Upload Image</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                            <div className="form-text">Upload a featured image</div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <label className="form-label fw-bold">Hashtags</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="hashtags"
                                                value={formData.hashtags}
                                                onChange={handleInputChange}
                                                placeholder="Enter hashtags separated by commas (e.g., #JavaScript, #React, #WebDev)"
                                            />
                                            <div className="form-text">Separate hashtags with commas</div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mb-4">
                                            <label className="form-label fw-bold">Blog Content</label>
                                            <textarea
                                                className="form-control"
                                                name="blogContent"
                                                rows="8"
                                                value={formData.blogContent}
                                                onChange={handleInputChange}
                                                placeholder="Write your blog content here..."
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                                <button type="submit" className="btn btn-primary btn-lg px-4">
                                                    <i className="bi bi-save me-2"></i>
                                                    Create Blog
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary btn-lg px-4"
                                                    onClick={() => setFormData({
                                                        title: '',
                                                        about: '',
                                                        authorName: '',
                                                        image: null,
                                                        hashtags: '',
                                                        blogContent: ''
                                                    })}
                                                >
                                                    <i className="bi bi-arrow-clockwise me-2"></i>
                                                    Reset
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;