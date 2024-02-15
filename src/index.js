import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Feature_one from './Feature/Feature_one';
import Feature_two from './Feature/Feature_two';
import Feature_three from './Feature/Feature_three';
import Pricing_one from './Pricing/Pricing_one';
import Pricing_two from './Pricing/Pricing_two';
import Pricing_three from './Pricing/Pricing_three';
import About_one from './About/About_one';
import About_two from './About/About_two';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      
    },
    {
        path: "/home",
        element: 
        <div>
            <Header/>
            <Home/>
            <Footer/>
        </div>,
      },
      {
        path: "/feature",
        element:
        <div>
            <Header/>
            <Feature_one/>
            <Feature_two/>
            <Feature_three/>
            <Footer/>
             
        </div> 
      },
     
      {
        path: "/pricing",
        element:
        <div>
            <Header/>
            <Pricing_one/>
            <Pricing_two/>
            <Pricing_three/>
            <Footer/>

        </div> 
      },
      {
        path: "/about",
        element:
        <div>
            <Header/>
            <About_one/>
            <About_two/>
            <Footer/>

        </div> 
      },
      {
        path: "/contact",
        element:
        <div>
            <Header/>
            <Contact/>
            <Footer/>
        </div> 
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router} />
 
);







