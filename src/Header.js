import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {

    return (
        <>
            {/* Header Section */}
            <section id="header" className="bg-white">
                    <nav className="navbar navbar-expand-sm navbar-light bg-white shadow fixed-top" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="400" data-aos-delay="200" data-aos-once="true">
                        <div className="container-fluid col-md-10  mx-auto">
                            <a className="navbar-brand text-dark"    style={{'font-weight' : '700' ,'font-size' : 24 , "font-family": "Nunito" }} href="#">Launch</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <Link className='nav-link' to="/">Home</Link>
                                    </li>
                                    {/* Start Drop Down */}
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button type="button" className="btn dropdown-toggle text-secondary border-0" data-bs-toggle="dropdown">Dropdown
                                                <ul className="dropdown-menu border-0">
                                                    <li><a className="dropdown-item text-secondary" href="#pricing_three">Testimonials</a></li>
                                                    <li>
                                                        <div class="dropdown dropend">
                                                            <button type="button" className="btn dropdown-toggle border-0 p-3 text-secondary" data-bs-toggle="dropdown">
                                                                Menu Two
                                                            </button>
                                                            <ul className="dropdown-menu border-0">
                                                                <li><a className="dropdown-item text-secondary" href="#">Sub Menu One</a></li>
                                                                <li><a className="dropdown-item text-secondary" href="#">Sub Menu Two</a></li>
                                                                <li><a className="dropdown-item text-secondary" href="#">Sub Menu Three</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li><a className="dropdown-item text-secondary" href="#">Menu Three</a></li>
                                                </ul>
                                            </button>
                                        </div>
                                    </li>
                                    {/* End Drop Down */}

                                    <li className="nav-item">
                                        <Link className='nav-link' to="/feature">Features</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to="/pricing">Pricing</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className='nav-link' to="/contact">Contact</Link>
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
