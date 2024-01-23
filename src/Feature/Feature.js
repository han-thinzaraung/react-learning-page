import React from 'react'
import person from './person.jpg'
import dashboard from './dashboard.jpg.webp'

export default function Features() {
  return (
    <>
    {/* Feature One */}
      <section id="features">
        <div className="col-10 mx-auto">
          <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="col-4">
              <p className="text-primary">DIGITAL SERVICES</p>
              <h2 className="text-dark">Selling Digital Services</h2>
              <p className="text-secondary">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
              <span><i classNameName="fas fa-check text-primary"></i><span className="text-secondary">There live the blind texts</span><br />
                <i classNameName="fas fa-check text-primary"></i><span className="text-secondary">Far far away behind the word</span></span>
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
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <img src={dashboard} alt="Dashboard Image" style={{ height: 400, width: 650 }} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

