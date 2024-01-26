import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Pricing_one() {
    return (
        <>
            {/* Pricing One */}
            <section id="pricing_one" className="bg-light">
                <div className="container-fluid col-md-10 mx-auto">
                    <div className="text-center mb-3 p-3" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
                        <h2 style={{ 'font-family': "Nunito", 'font-weight': '500' }}>Pricing</h2>
                        <p className="text-secondary" style={{ 'font-family': "Nunito", 'font-weight': '500' }}>Pricing for everyone. Choose your plan now!</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="800">
                        <div className="col-md-4 col-sm-10 mb-4 d-flex justify-content-center">
                            <div className="card  border-0 rounded-5 w-80 shadow-1" style={{ width: '18rem', height: '30rem' }}>
                                <div className="card-body mt-5">
                                    <h4 className="card-title text-center mb-3" style={{ 'font-family': "Nunito" }}>Free <h2 className="text-primary"><sup>$</sup>0</h2></h4>
                                    <div className="card-text p-3 mt-3">
                                        <div class="row">
                                            <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="400"><FontAwesomeIcon icon={faCheck} className='text-primary me-2 ' />There live the blind texts</p>
                                            <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="500"><FontAwesomeIcon icon={faCheck} className='text-primary me-2 ' />Far far away behind the word</p>
                                            <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="600"><FontAwesomeIcon icon={faCheck} className='text-primary me-2 ' />Their place and supplies</p>
                                        </div>
                                        <div className="text-center mt-5">
                                            <a href="#" className="btn btn-outline-primary btn-lg rounded-pill" style={{ 'font-family': "Nunito" }}>Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-10 mb-4 d-flex justify-content-center">
                            <div className="card w-80 shadow border-0 rounded-5" style={{ width: '18rem', height: '30rem' }}>
                                <div className="card-body mt-5">
                                    <h4 className="card-title text-center mb-3" style={{ 'font-family': "Nunito" }}>Standard <h2 className="text-primary"><sup>$</sup>19.99</h2></h4>
                                    <div className="card-text p-3 mt-3">
                                        <div class="row">
                                            <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="400"><FontAwesomeIcon icon={faCheck} className='text-primary me-2' />There live the blind texts</p>
                                            <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="500"><FontAwesomeIcon icon={faCheck} className='text-primary me-2' />Far far away behind the word</p>
                                            <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="600"><FontAwesomeIcon icon={faCheck} className='text-primary me-2' />Their place and supplies</p>
                                        </div>
                                        <div className="text-center mt-5">
                                            <a href="#" className="btn btn-primary btn-lg rounded-pill" style={{ 'font-family': "Nunito" }}>Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-10 mb-4 d-flex justify-content-center">
                            <div className="card  border-0 rounded-5 w-80 shadow-1" style={{ width: '18rem', height: '30rem' }}>
                                <div className="card-body mt-5">
                                    <h4 className="card-title text-center mb-3" style={{ 'font-family': "Nunito" }}>Premium <h2 className="text-primary"><sup>$</sup>79.99</h2></h4>
                                    <div className="card-text p-3 mt-3">
                                        <div class="row">
                                            <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="400"><FontAwesomeIcon icon={faCheck} className='text-primary me-2' />There live the blind texts</p>
                                            <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="500"><FontAwesomeIcon icon={faCheck} className='text-primary me-2'  />Far far away behind the word</p>
                                            <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="600"><FontAwesomeIcon icon={faCheck} className='text-primary me-2' />Their place and supplies</p>
                                        </div>
                                        <div className="text-center mt-5">
                                            <a href="#" className="btn btn-outline-primary btn-lg rounded-pill" style={{ 'font-family': "Nunito" }}>Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section >
        </>
    )
}

