import React from 'react'
import dashboard_1 from './dashboard.jpg.webp'

export default function Feature_two() {
    return (
        <>
            {/* Feature Two */}
            <section id="feature_two" className="bg-light">
                <div className="col-md-10 mx-auto py-4">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card card-body w-80 shadow border-0"  data-aos="fade-left" data-aos-duration="800" data-aos-delay="400" data-aos-easing="slide">
                                <img src={dashboard_1} alt="dashboard" className="image-fluid" width={600} height={400} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 px-2 bg-light card_hover" style={{ height: '8rem', width: '30rem' }} data-aos="fade-left" data-aos-duration="800" data-aos-delay="100" data-aos-easing="slide">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2 text-bg-info text-light rounded-4 d-flex align-items-center" style={{ height: 40, width: 40 }}>
                                            <svg className="bi bi-app-indicator" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"></path>
                                                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                                            </svg>
                                        </div>
                                        <div className="col-md-9">
                                            <h5 className="text-dark"  style={{'font-family': "Nunito" , 'font-weight' : '500'}} data-aos="fade-left">Grow Your Business</h5>
                                            <p className="text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border-0 px-2 bg-light" style={{ height: '8rem', width: '30rem' }} data-aos="fade-left" data-aos-duration="800" data-aos-delay="200" data-aos-easing="slide">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2 text-bg-warning text-light rounded-4 d-flex align-items-center" style={{ height: 40, width: 40 }}>
                                            <svg className="bi bi-arrow-repeat" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"></path>
                                                <path fill-rule="evenodd" d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"></path>
                                            </svg>
                                        </div>
                                        <div className="col-md-9">
                                            <h5 className="text-dark" style={{'font-family': "Nunito" , 'font-weight' : '500'}}>Build Products</h5>
                                            <p className="text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="card border-0 px-2 bg-light" style={{ height: '8rem', width: '30rem' }}  data-aos="fade-left" data-aos-duration="800" data-aos-delay="300" data-aos-easing="slide">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2 text-bg-danger text-light  rounded-4 d-flex align-items-center" style={{ height: 40, width: 40 }}>
                                            <svg className="bi bi-briefcase" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"></path>
                                                <path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"></path>
                                            </svg>
                                        </div>
                                        <div className="col-md-9">
                                            <h5 className="text-dark" style={{'font-family': "Nunito" , 'font-weight' : '500'}}>Success Every Day</h5>
                                            <p className="text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card  border-0 px-2 bg-light" style={{ height: '8rem', width: '30rem' }}  data-aos="fade-left" data-aos-duration="800" data-aos-delay="400" data-aos-easing="slide">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2 text-bg-primary text-light rounded-4 d-flex align-items-center" style={{ height: 40, width: 40 }}>
                                            <svg className="bi bi-collection" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"></path>
                                            </svg>
                                        </div>
                                        <div className="col-md-9">
                                            <h5 className="text-dark" style={{'font-family': "Nunito" , 'font-weight' : '500'}}>Bring Ideas To Life</h5>
                                            <p className="text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
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
