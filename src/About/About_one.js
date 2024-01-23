import React from 'react'
import About from './about.svg'

export default function About_one() {
  return (
    <>
    {/* About One */}
      <section id="about_one">
        <div className="container-fluid col-md-10 mx-auto">
          <div className="row">
            <div className="col-md-8">
              <img src={About} alt="About Image" style={{ width: 700, height: 600 }}></img>
            </div>
            <div className="col-md-4">
              <h4 className="text-primary">About</h4>
              <h1 className="text-dark">About Us</h1>
              <p className="text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p><br />
              <p className="text-secondary">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p><br />
              <i classNameName="fas fa-check text-primary"></i><span className="text-secondary">There live the blind texts</span><br /><br />
              <i classNameName="fas fa-check text-primary"></i><span className="text-secondary">Far far away behind the word</span><br /><br />
              <i classNameName="fas fa-check text-primary"></i><span className="text-secondary">Their place and supplies</span><br /><br />
              <div className="row">
                <div className="col-md-6">
                  <h1>59 M</h1>
                  <h4 className="text-secondary">MEMBERS</h4>
                </div>
                <div className="col-md-6">
                  <h1>14</h1>
                  <h4 className="text-secondary">TEAM</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
