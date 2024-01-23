import React from 'react'
import person_1 from './person_1.jpg.webp'
import person_2 from './person_2.jpg.webp'
import person_3 from './person_3.jpg.webp'

export default function About_two() {
  return (
    <>
    {/* About Two */}
          <section id="about_two">
              <div className="container-fluid col-md-10 mx-auto">
                  <div className="text-center">
                      <h1 className="text-dark">Our News</h1>
                      <p className="text-secondary">Far from the countries Vokalia and Consonantia</p>
                  </div>
                  <div className="row">
                      <div className="col-md-4">
                          <div className="card">
                              <div className="card-body">
                                  <div className="row p-3 mb-3">
                                      <div className="col-2">
                                          <img className="rounded-pill" src={person_1} alt="Person Image" style={{ height: 40, width: 40 }} />
                                      </div>
                                      <div className="col-10">
                                          <span className="text-dark">Posted By James</span><br />
                                          <span className="text-secondary">Jun 14 , 2020</span>
                                      </div>
                                      <p className="text-secondary">Digital Service, 4 min read</p>
                                      <h3>Far far away behind the word mountains far from the countries</h3>
                                  </div>

                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="card">
                              <div className="card-body">
                                  <div className="row p-3 mb-3">
                                      <div className="col-2">
                                          <img className="rounded-pill" src={person_2} alt="Person Image" style={{ height: 40, width: 40 }} />
                                      </div>
                                      <div className="col-10">
                                          <span className="text-dark">Posted By Khan</span><br />
                                          <span className="text-secondary">Jun 14 , 2020</span>
                                      </div>
                                      <p className="text-secondary">Digital Service, 4 min read</p>
                                      <h3>Far far away behind the word mountains far from the countries</h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="card">
                              <div className="card-body">
                                  <div className="row p-3 mb-3">
                                      <div className="col-2">
                                          <img className="rounded-pill" src={person_3} alt="Person Image" style={{ height: 40, width: 40 }} />
                                      </div>
                                      <div className="col-10">
                                          <span className="text-dark">Posted By Rob</span><br />
                                          <span className="text-secondary">Jun 14 , 2020</span>
                                      </div>
                                      <p className="text-secondary">Digital Service, 4 min read</p>
                                      <h3>Far far away behind the word mountains far from the countries</h3>
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
