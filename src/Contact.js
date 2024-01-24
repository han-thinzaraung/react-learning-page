import React from "react"

export default function Contact() {
  return (
    <>
    {/* Contact */}
          <section id="contact">
              <div className="container-fluid">
                  <div className="text-center fw-light" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="200">
                      <h2 style={{"font-family": "Nunito" }}>Get In Touch</h2>
                      <p className="text-secondary" style={{"font-family": "Nunito" }}>Far from the countries Vokalia and Consonantia</p>
                  </div>

                  <div className="row m-5">
                      <div className="col-md-7 p-5" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="400">
                          <div className="row ">
                              <div class="col">
                                  <label className="text-secondary">First name</label>
                                  <input type="text" class="form-control border-0 border-bottom : 2 form_border border-dark p-3 rounded-0 "aria-label="First name"></input>
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
                                  <a href="#" className="btn btn-primary rounded-5" style={{ "font-family": "Nunito", "font-size": 13, width:150 }}>SEND MESSAGE</a>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-4 mx-5 p-5" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="600">
                          <h4 className="py-3 px-3" style={{"font-family": "Nunito" }} >Contact Info</h4>
                          <p  className = "font_hover" style={{"font-family": "Nunito" }} ><i class="fa-solid fa-location-pin px-3"></i>43 Raymouth Rd. Baltemoer, London 3910</p>
                          <p  className = "font_hover" style={{"font-family": "Nunito" }} ><i class="fa-solid fa-phone px-3"></i>+1(123)-456-7890</p>
                          <p  className = "font_hover" style={{"font-family": "Nunito" }} ><i class="fa-solid fa-phone px-3"></i>+1(123)-456-7890</p>
                          <p  className = "font_hover" style={{"font-family": "Nunito" }} > <i class="fa-solid fa-square-envelope  px-3"></i>info@mydomain.com</p>
                          <p  className = "font_hover" style={{"font-family": "Nunito" }} ><i class="fa-solid fa-globe px-3"></i>https://Colorlib.com</p>
                      </div>
                  </div>
              </div>
          </section>
    </>
  )
}

