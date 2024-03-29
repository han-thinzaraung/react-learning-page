import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <>
            {/* Contact */}
            <section id="contact">
                <div className="container-fluid col-md-11 mx-auto">
                    <div className="text-center fw-light" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="200" data-aos-once="true">
                        <h2 style={{ "font-family": "Nunito" }}>Get In Touch</h2>
                        <p className="text-secondary" style={{ "font-family": "Nunito" }}>Far from the countries Vokalia and Consonantia</p>
                    </div>

                    <div className="row m-5">
                        <div className="col-md-7 p-3" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
                            <div className="row ">
                                <div class="col">
                                    <label className="text-secondary">First name</label>
                                    <input type="text" class="form-control border-0 border-bottom : 2 form_border border-dark p-3 rounded-0 " aria-label="First name"></input>
                                </div>
                                <div class="col mb-3">
                                    <label className="text-secondary">Last Name</label>
                                    <input type="text" class="form-control border-0 border-bottom : 2  border-dark p-3 rounded-0 " aria-label="Last name"></input>
                                </div>
                                <div class="mb-3">
                                    <label className="text-secondary ">Email address</label>
                                    <input type="email" className="form-control border-0 border-bottom : 2  border-dark p-3 rounded-0 "></input>
                                </div>
                                <div>
                                    <label className="text-secondary">Message</label>
                                    <textarea type="text" className="form-control border-0 border-bottom : 2  border-dark p-5 rounded-0 "></textarea>
                                </div>
                                <div className="mt-3">
                                    <a href="#" className="btn btn-primary rounded-5 " style={{ "font-family": "sans-serif", "font-size": 13, width: 150, height: 38 }}>SEND MESSAGE</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 align-items-center justify-content-center vh-80 m-3" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
                            <h4 className="p-3" style={{ "font-family": "Nunito" }} >Contact Info</h4>
                                <p className="text-secondary" style={{ "font-family": "Nunito" }} ><FontAwesomeIcon icon={faLocationDot} className="px-1" />43 Raymouth Rd. Baltemoer, London 3910</p>
                                <p className="text-secondary" style={{ "font-family": "Nunito" }} ><FontAwesomeIcon icon={faPhone} className="px-1" />+1(123)-456-7890 , +1(123)-456-7890</p>
                                <p className="text-secondary" style={{ "font-family": "Nunito" }} > <FontAwesomeIcon icon={faEnvelope} className="px-1" />info@mydomain.com</p>
                                <p className="text-secondary" style={{ "font-family": "Nunito" }} ><FontAwesomeIcon icon={faGlobe} className="px-1" />https://Colorlib.com</p>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

