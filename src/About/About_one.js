import React from 'react'
import About from './about.svg'

export default function About_one() {
  return (
    <>
      {/* About One */}
      <section id="about_one">
        <div className="container-fluid col-md-10 mx-auto">
          <div className="row" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="200">
            <div className="col-md-8">
              <img src={About} alt="About Image" style={{ width: 700, height: 600 }}></img>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="200">
              <h4 className="text-primary" style={{ 'font-family': "Nunito",'font-weight': '600'  }}>About</h4>
              <h1 className="text-dark" style={{ 'font-family': "Nunito", 'font-weight': '500' }}>About Us</h1>
              <p className="text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p><br />
              <p className="text-secondary">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p><br />
              <div class="row" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="400">
                <div class="col-md-1">
                  <i className="fas fa-check text-primary"></i><br />
                  <i className="fas fa-check text-primary"></i><br />
                  <i className="fas fa-check text-primary"></i><br />
                </div>
                <div class="col-md-11">
                  <span className="text-secondary">There live the blind texts</span><br />
                  <span className="text-secondary">Far far away behind the word</span><br />
                  <span className="text-secondary">Far from the countries Vokalia and Consonantia</span><br />
                </div>
              </div>
              <div className="row mt-5" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="800">
                <div className="col-md-6">
                  <h1>59 M</h1>
                  <h4 className="text-secondary" style={{'font-size' : 11}} >MEMBERS</h4>
                </div>
                <div className="col-md-6">
                  <h1>14</h1>
                  <h4 className="text-secondary" style={{'font-size' : 11}} >TEAM</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
