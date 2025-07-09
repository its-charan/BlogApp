import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold text-primary" href="#">
                        <i className="fas fa-blog me-2"></i>MyBlogs
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <i className="fas fa-home me-1"></i>Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-plus me-1"></i>Create Post
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-user me-1"></i>Profile
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-th-large me-1"></i>Categories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Technology</a></li>
                                    <li><a className="dropdown-item" href="#">Lifestyle</a></li>
                                    <li><a className="dropdown-item" href="#">Travel</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">All Categories</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 bg-light" type="search" placeholder="Search blogs..." aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                        <div className="navbar-nav ms-3">
                            <a className="nav-link" href="#">
                                <i className="fas fa-sign-in-alt me-1"></i>Login
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
