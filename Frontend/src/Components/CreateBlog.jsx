import React, { useState } from 'react';

const CreateBlog = () => {
    const [formData, setFormData] = useState({
        blogTitle: '',
        authorName: '',
        blogContent: '',
        image: null
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
            blogTitle: '',
            authorName: '',
            blogContent: '',
            image: null
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">Create New Blog</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Blog Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="blogTitle"
                                        value={formData.blogTitle}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Author Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="authorName"
                                        value={formData.authorName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Upload Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Blog Content</label>
                                    <textarea
                                        className="form-control"
                                        name="blogContent"
                                        rows="8"
                                        value={formData.blogContent}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Create Blog
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;