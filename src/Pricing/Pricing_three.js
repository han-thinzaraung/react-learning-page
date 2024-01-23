import React from 'react'
import person from './person.jpg'
import person_3 from './person_3.jpg.webp'

export default function Pricing_three() {
  return (
    <>
    {/* Pricing Three */}
          <section id="pricing_three">
              <div className="container-fluid col-md-10 mx-auto m-5 p-5">
                  <div className="row">
                      <div className="col-md-4">
                          <p className="text-primary">TESTIMONIALS</p>
                          <h1>Our Customers</h1>
                          <h1>Feedback</h1>
                      </div>
                      <div className="col-md-4">
                          <p>“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
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

                      <div className="col-md-4">
                          <p>“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”</p>
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
                  </div>
              </div>

          </section>
    </>
  )
}
