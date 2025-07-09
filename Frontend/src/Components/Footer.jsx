import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <h5 className="text-primary mb-3">
                            <i className="fas fa-blog me-2"></i>MyBlogs
                        </h5>
                        <p className="text-muted">
                            Your go-to platform for sharing stories, insights, and connecting with fellow writers and readers.
                        </p>
                        <div className="social-links">
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-white me-3">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h6 className="text-uppercase mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted text-decoration-none">Home</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">About</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h6 className="text-uppercase mb-3">Categories</h6>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted text-decoration-none">Technology</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Lifestyle</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Travel</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Health</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <h6 className="text-uppercase mb-3">Newsletter</h6>
                        <p className="text-muted">Stay updated with our latest posts and news.</p>
                        <div className="input-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter your email"
                                aria-label="Email address"
                            />
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="text-muted mb-0">© 2024 MyBlogs. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="text-muted mb-0">Made with <i className="fas fa-heart text-danger"></i> by MyBlogs Team</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
