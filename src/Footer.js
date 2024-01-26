import React from 'react'


export default function Footer() {
  return (
    <>
    {/* Footer Section */}
    <section id="footer" className="bg-light">
        <div className="container-fluid col-md-11 mx-auto">
            <div className="row p-5 m-3">
                <div className="col-md-5">
                    <h3 className="text-dark" style={{"font-family": "Nunito" }}>About Launch</h3><br/>
                    <p className="text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div class="mt-3 mb-3">
                        <h4 style={{"font-family": "Nunito" }}>Connect</h4>
                        <div className="py-2 mt-3">
                        <a href="#"><i className="fab fa-instagram text-secondary mx-2"></i></a>
                          <a href="#"><i className="fab fa-twitter  text-secondary mx-2"></i></a>
                          <a href="#"><i className="fab fa-facebook text-secondary mx-2"></i></a>
                          <a href="#"><i className="fab fa-linkedin text-secondary mx-2"></i></a>
                          <a href="#"><i className="fab fa-pinterest text-secondary mx-2"></i></a>
                          <a href="#"><i className="fa-solid fa-basketball text-secondary"></i></a>
                        </div>
                    </div>

                </div>
                <div class="col-md-2">
                    <h4 class="mb-4" style={{"font-family": "Nunito" }}>Projects</h4>
                    <p className="text-secondary">La Lega Stadium</p>
                    <p className="text-secondary">France Building</p>
                    <p className="text-secondary">22 New Homes</p>
                    <p className="text-secondary">Manage Center</p>
                    <p className="text-secondary">Sports Hall</p>
                </div>
                <div className="col-md-2">
                    <h4 class="mb-4" style={{"font-family": "Nunito" }}>Services</h4>
                    <p className="text-secondary">Architect</p>
                    <p className="text-secondary">Interior Design</p>
                    <p className="text-secondary">Landscape Design</p>
                    <p className="text-secondary">Manage Center</p>
                    <p className="text-secondary">Consultancy</p>
                </div>
                <div className="col-md-3">
                <h4 class="mb-4" style={{"font-family": "Nunito" }}>Contact</h4>
                    <p className="text-secondary">43 Raymouth Rd. Baltemoer, London 3910</p>
                    <p className="text-secondary">+1(123)-456-7890</p>
                    <p className="text-secondary">+1(123)-456-7890</p>
                    <p className="text-secondary">info@mydomain.com</p>
                </div>
            </div>
            <p className="text-center p-5 text-secondary ">Copyright ©2024 All rights reserved | This template is made with  <i class="fa-solid fa-heart text-danger p-2"></i>by<a href="#" class="link_color mx-1">Colorlib</a></p>
        </div>
    </section>
    </>
  )
}
