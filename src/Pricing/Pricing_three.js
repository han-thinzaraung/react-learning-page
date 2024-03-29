import React from 'react'
import person from './person.jpg'
import person_2 from './person_2.jpg.webp'
import person_3 from './person_3.jpg.webp'

export default function Pricing_three() {
    return (
        <>
            {/* Pricing Three */}
            <section id="pricing_three">

                <div className="container-fluid col-md-10 mx-auto d-none d-md-block">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="text-primary">TESTIMONIALS</p>
                            <h1>Our Customers</h1>
                            <h1>Feedback</h1>
                            <div class="row mt-3">
                                <div class="col-2 bg-secondary align-items-center justify-content-center d-flex m-3 rounded-2" style={{ height: 50 }} data-bs-target="#demo2" data-bs-slide="prev">
                                    <i class="fa-solid fa-arrow-left text-light fa-2x"></i>
                                </div>
                                <div class="col-2 bg-secondary align-items-center justify-content-center d-flex m-3 rounded-2" style={{ height: 50 }} data-bs-target="#demo2" data-bs-slide="next">
                                    <i class="fa-solid fa-arrow-right text-light fa-2x"></i>
                                </div>

                            </div>
                        </div>
                        {/* <!-- Carousel --> */}
                        <div id="demo2" class="carousel slide col-md-8" data-bs-ride="carousel">

                            {/* <!-- Indicators/dots --> */}
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active bg-dark"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1" class="bg-dark"></button>
                            </div>

                            {/* <!-- The slideshow/carousel --> */}
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row">
                                        <div className="col-md-6">
                                            <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                                            <div className="row">
                                                <div className="col-2">
                                                    <img className="rounded-pill" src={person} alt="Person Image" style={{ height: 40, width: 40 }} />
                                                </div>
                                                <div className="col-10">
                                                    <span className="text-dark">James Anderson</span><br />
                                                    <span className="text-secondary">Facebook, Product Lead</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                                            <div className="row">
                                                <div className="col-2">
                                                    <img className="rounded-pill" src={person_2} alt="Person Image" style={{ height: 40, width: 40 }} />
                                                </div>
                                                <div className="col-10">
                                                    <span className="text-dark">James Anderson</span><br />
                                                    <span className="text-secondary">Facebook, Product Lead</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row">
                                        <div className="col-md-6">
                                            <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                                            <div className="row">
                                                <div className="col-2">
                                                    <img className="rounded-pill" src={person_2} alt="Person Image" style={{ height: 40, width: 40 }} />
                                                </div>
                                                <div className="col-10">
                                                    <span className="text-dark">James Anderson</span><br />
                                                    <span className="text-secondary">Facebook, Product Lead</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                                            <div className="row">
                                                <div className="col-2">
                                                    <img className="rounded-pill" src={person_3} alt="Person Image" style={{ height: 40, width: 40 }} />
                                                </div>
                                                <div className="col-10">
                                                    <span className="text-dark">James Anderson</span><br />
                                                    <span className="text-secondary">Facebook, Product Lead</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-5">
                                {/* <!-- Left and right controls/icons --> */}
                                <button class="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid col-sm-10 mx-auto m-5 p-5 d-md-none">
                    <div className="row">
                        <div className="col-sm-10">
                            <p className="text-primary">TESTIMONIALS</p>
                            <h1>Our Customers</h1>
                            <h1>Feedback</h1>
                            <div className="row mt-3">
                                <div className="col-2 bg-secondary align-items-center justify-content-center d-flex m-3 rounded-2" style={{ height: 50 }} data-bs-target="#demo3" data-bs-slide="prev">
                                    <i className="fa-solid fa-arrow-left text-light fa-2x"></i>
                                </div>
                                <div className="col-2 bg-secondary align-items-center justify-content-center d-flex m-3 rounded-2" style={{ height: 50 }} data-bs-target="#demo3" data-bs-slide="next">
                                    <i className="fa-solid fa-arrow-right text-light fa-2x"></i>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Carousel --> */}
                        <div id="demo3" className="carousel slide col-sm-10" data-bs-ride="carousel">
                            {/* <!-- Indicators/dots --> */}
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#demo3" data-bs-slide-to="0" className="active "></button>
                                <button type="button" data-bs-target="#demo3" data-bs-slide-to="1" ></button>
                                <button type="button" data-bs-target="#demo3" data-bs-slide-to="2" ></button>
                            </div>

                            {/* <!-- The slideshow/carousel --> */}
                            <div className="carousel-inner">
                                <div className="carousel-item active">

                                    <div className="col-sm-10">
                                        <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img className="rounded-pill" src={person} alt="Person Image" style={{ height: 40, width: 40 }} />
                                            </div>
                                            <div className="col-md-10">
                                                <span className="text-dark">James Anderson</span><br />
                                                <span className="text-secondary">Facebook, Product Lead</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="col-sm-10">
                                        <p className="fst-italic mb-3">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img className="rounded-pill" src={person_2} alt="Person Image" style={{ height: 40, width: 40 }} />
                                            </div>
                                            <div className="col-md-10">
                                                <span className="text-dark">James Anderson</span><br />
                                                <span className="text-secondary">Facebook, Product Lead</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item mb-5">
                                    <div className="col-sm-10">
                                        <p className="fst-italic mb-5">“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
                                        <div className="row">
                                            <div className="col-2">
                                                <img className="rounded-pill" src={person_3} alt="Person Image" style={{ height: 40, width: 40 }} />
                                            </div>
                                            <div className="col-10">
                                                <span className="text-dark">James Anderson</span><br />
                                                <span className="text-secondary">Facebook, Product Lead</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    {/* <!-- Left and right controls/icons --> */}
                                    <button class="carousel-control-prev" type="button" data-bs-target="#demo3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon"></span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#demo3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section >
        </>
    )
}
