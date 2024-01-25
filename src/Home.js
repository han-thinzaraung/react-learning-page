import React from 'react'
import page from './market-launch-pana.svg'

export default function Home() {
    return (
        <>
            {/* Home Section */}
            <section id="home">
                <div className="container-fluid col-md-10">
                    <div className="row">
                        <div className="col-md-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-easing="slide">
                            <p className="textsize py-3">Promote Your Products by Colorlib</p>
                            <p className='text-secondary py-3'>Another cool free html css template by <a href="#" target="_blank" style={{'text-decoration' : 'none'}}>Colorlib</a> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                            <div className='mt-3 py-3' data-aos="fade-up" data-aos-easing="slide" data-aos-duration="800" data-aos-delay="500">
                            <a href="#feature_one"><button className="btn btn-primary rounded-pill" type="button" style={{width:150 , height:50, 'font-size': 11}}>SEE FEATURES</button></a>
                            <a href="#pricing_one"><button className="btn btn-outline-primary rounded-pill mx-3" type="button" style={{width:130 , height:50,  'font-size': 11}}>PRICING</button></a>  
                            </div>
                        </div>
                        <div className="col-md-7" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" data-aos-easing="slide">
                            <img src={page} alt="Company Image"/>
                        </div>
                    </div> 
                </div>
        </section >
    </>
  )
}
