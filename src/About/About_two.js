import React from 'react'
import person_1 from './person_1.jpg.webp'
import person_2 from './person_2.jpg.webp'
import person_3 from './person_3.jpg.webp'

export default function About_two() {
  return (
    <>
    {/* About Two */}
          <section id="about_two" className="bg-light">
              <div className="container-fluid col-md-10 mx-auto py-5">
                  <div className="text-center py-3" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="200">
                      <h1 className="text-dark" style={{ 'font-family' : 'Nunito' }}>Our News</h1>
                      <p className="text-secondary" style={{ 'font-family' : 'Nunito' }}>Far from the countries Vokalia and Consonantia</p>
                  </div>
                  <div className="row">
                      <div className="col-md-4" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="300" data-aos-once="true">
                          <div className="card border-0 shadow w-8 rounded-3 card1">
                              <div className="card-body">
                                  <div className="row p-3">
                                      <div className="col-2 mb-3">
                                          <img className="rounded-pill" src={person_1} alt="Person Image" style={{ height: 40, width: 40 }} />
                                      </div>
                                      <div className="col-10 mb-3">
                                          <span className="text-dark">Posted By James</span><br />
                                          <span className="text-secondary">Jun 14 , 2020</span>
                                      </div>
                                      <p className="text-secondary">Digital Service, 4 min read</p>
                                      <h3 className ="font_hover"style={{ 'font-family' : 'Nunito' }}>Far far away behind the word mountains far from the countries</h3>
                                      <i className="fa-solid fa-arrow-right fa-2x p-3"></i>
                                  </div>

                              </div>
                          </div>
                      </div>
                      <div className="col-md-4" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
                          <div className="card border-0 shadow w-8 rounded-3 card1">
                              <div className="card-body">
                                  <div className="row p-3">
                                      <div className="col-2 mb-3">
                                          <img className="rounded-pill" src={person_2} alt="Person Image" style={{ height: 40, width: 40 }} />
                                      </div>
                                      <div className="col-10 mb-3">
                                          <span className="text-dark">Posted By Khan</span><br />
                                          <span className="text-secondary">Jun 14 , 2020</span>
                                      </div>
                                      <p className="text-secondary">Digital Service, 4 min read</p>
                                      <h3 className ="font_hover" style={{ 'font-family' : 'Nunito' }}>Far far away behind the word mountains far from the countries</h3>
                                      <i className="fa-solid fa-arrow-right fa-2x p-3"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
                          <div className="card border-0 shadow w-8 rounded-3 card1">
                              <div className="card-body">
                                  <div className="row p-3">
                                      <div className="col-2 mb-3">
                                          <img className="rounded-pill" src={person_3} alt="Person Image" style={{ height: 40, width: 40 }} />
                                      </div>
                                      <div className="col-10 mb-3">
                                          <span className="text-dark">Posted By Rob</span><br />
                                          <span className="text-secondary">Jun 14 , 2020</span>
                                      </div>
                                      <p className="text-secondary">Digital Service, 4 min read</p>
                                      <h3 className ="font_hover" style={{ 'font-family' : 'Nunito' }}>Far far away behind the word mountains far from the countries</h3>
                                      <i className="fa-solid fa-arrow-right fa-2x p-3"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}
