import React from 'react'
import page from './market-launch-pana.svg'

export default function Home() {
  return (
    <>
    {/* Home Section */}
          <section id="home">
              <div className="col-10 mx-auto">
                  <div className="row align-items-center" style={{ height: '100vh' }}>
                      <div className="col-md-5">
                          <h1 className="tex-center">Promote Your Products by Colorlib</h1>
                          <p>Another cool free html css template by Colorlib Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                          <div>
                              <button className="btn btn-primary rounded-pill" type="button">See Features</button>
                              <button className="btn btn-outline-primary rounded-pill mx-3" type="button">Pricing</button>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="row">
                              <div className="col-md-10">
                                  <img src={page} alt="Company Image" />
                              </div>
                              <div className="col-md-2">

                              </div>
                          </div>
                      </div>
                  </div>

              </div>


          </section>
    </>
  )
}
