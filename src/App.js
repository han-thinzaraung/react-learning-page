import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './Header';
import Home from './Home';
import Feature_one from './Feature/Feature_one';
import Feature_three from './Feature/Feature_three';
import Feature_two from './Feature/Feature_two';
import Pricing_one from './Pricing/Pricing_one';
import Pricing_two from './Pricing/Pricing_two';
import Pricing_three from './Pricing/Pricing_three';
import About_one from './About/About_one';
import About_two from './About/About_two';
import Contact from './Contact';
import Footer from './Footer';


AOS.init();
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
     <Feature_one/>
      <Feature_two/>
      <Feature_three/>
      <Pricing_one/>
      <Pricing_two/>
      <Pricing_three/>
      <About_one/>
      <About_two/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
