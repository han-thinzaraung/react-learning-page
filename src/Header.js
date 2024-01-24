import React from 'react'

export default function Header() {
    return (
        <>
            {/* Header Section */}
            <section id="header" className="bg-white">
                    <nav className="navbar navbar-expand-sm navbar-light bg-white shadow fixed-top" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="400" data-aos-delay="200">
                        <div className="container-fluid col-md-10 mx-auto">
                            <a className="navbar-brand text-dark"    style={{'font-weight' : '700' ,'font-size' : 24}} href="#">Launch</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    {/* Start Drop Down */}
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                                Dropdown
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="">Testimonials</a></li>
                                                    <li>
                                                        <div class="dropdown dropend">
                                                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                                                Menu Two
                                                            </button>
                                                            <ul className="dropdown-menu">
                                                                <li><a className="dropdown-item" href="#">Sub Menu One</a></li>
                                                                <li><a className="dropdown-item" href="#">Sub Menu Two</a></li>
                                                                <li><a className="dropdown-item" href="#">Sub Menu Three</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li><a className="dropdown-item" href="#">Menu Three</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </li>
                                    {/* End Drop Down */}

                                    <li className="nav-item">
                                        <a className="nav-link" href="#feature_one">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pricing_one">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about_one">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <button className="btn btn-outline-dark mx-3 rounded-pill" type="button" style={{width:130}}>Sign In</button>
                                    <button className="btn btn-primary rounded-pill" type="button" style={{width:130}}>Register</button>
                                </form>
                            </div>
                        </div>
                    </nav>
            </section>
        </>
    )
}
