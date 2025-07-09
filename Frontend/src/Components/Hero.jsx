import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section bg-primary text-white py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold mb-4">Welcome to MyBlogs</h1>
                        <p className="lead mb-4">
                            Discover amazing stories, insights, and knowledge from writers around the world. 
                            Share your thoughts and connect with a community of passionate readers and writers.
                        </p>
                        <div className="d-flex gap-3">
                            <button className="btn btn-light btn-lg">
                                <i className="fas fa-rocket me-2"></i>Start Reading
                            </button>
                            <button className="btn btn-outline-light btn-lg">
                                <i className="fas fa-pen me-2"></i>Write a Blog
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-image">
                            <i className="fas fa-blog" style={{fontSize: '15rem', opacity: '0.2'}}></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
