import React from 'react'

export default function Header() {
    return (
        <>  
        {/* Heade Section */}
            <section id="header">
                <div className="row">
                    <nav className="navbar navbar-expand-sm navbar-light bg-white col-10 mx-auto fixed-top">
                        <div className="container-fluid">
                            <a className="navbar-brand text-dark fw-bold" href="">Launch</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown">
                                                Dropdown
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Testimonials</a></li>
                                                    <li>
                                                        <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown">
                                                            Menu Two
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#">Sub Menu One</a></li>
                                                            <li><a className="dropdown-item" href="#">Sub Menu Two</a></li>
                                                            <li><a className="dropdown-item" href="#">Sub Menu Three</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#">Menu Three</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="">Contact</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <button className="btn btn-outline-dark mx-3 rounded-pill" type="button">Sign In</button>
                                    <button className="btn btn-primary rounded-pill" type="button">Register</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}
