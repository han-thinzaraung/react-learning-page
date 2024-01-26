import React from 'react'
import About from './about.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';

export default function About_one() {
  return (
    <>
      {/* About One */}
      <section id="about_one">
        <div className="container-fluid col-md-10 mx-auto">
          <div className="row" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="200">
            <div className="col-md-8">
              <img src={About} alt="About Image"></img>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="200">
              <h4 className="text-primary" style={{ 'font-family': "Nunito", 'font-weight': '600' }}>About</h4>
              <h1 className="text-dark" style={{ 'font-family': "Nunito", 'font-weight': '500' }}>About Us</h1>
              <p className="text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p><br />
              <p className="text-secondary">Separated they <span class="highlight">live in Bookmarksgrove right at the coast of the Semantics,</span>  a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p><br />
              <div class="row" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="400">
                <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="400"><FontAwesomeIcon icon={faCheck} className='text-primary me-2' style={{ 'font-family': "Nunito" }} />There live the blind texts</p>
                <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="500"><FontAwesomeIcon icon={faCheck} className='text-primary me-2' style={{ 'font-family': "Nunito" }} />Far far away behind the word</p>
                <p className="text-secondary" data-aos="fade-up" data-aos-once="true" data-aos-delay="600"><FontAwesomeIcon icon={faCheck} className='text-primary me-2' style={{ 'font-family': "Nunito" }} />Their place and supplies</p>
              </div>
              <div className="row mt-5" data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="800">
                <div className="col-md-6">
                  <h1 className='d-block fw-light mb-2'>
                    <span><CountUp end={59} duration={5} /></span>
                    <span>M</span>
                  </h1>
                  <h4 className="text-secondary" style={{ 'font-size': 11 }} >MEMBERS</h4>
                </div>
                <div className="col-md-6">
                <h1 className='d-block fw-light mb-2'>
                    <span><CountUp end={14} duration={5} /></span>
                  </h1>
                  <h4 className="text-secondary" style={{ 'font-size': 11 }} >TEAM</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
