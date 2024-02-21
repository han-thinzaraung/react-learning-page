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
      children:[
        {
          path: "/",
          element: 
          <div>

              <Home/>

          </div>,
        },
        {
          path: "/feature",
          element:
          <div>

              <Feature_one/>
              <Feature_two/>
              <Feature_three/>

          </div> 
        },
       
        {
          path: "/pricing",
          element:
          <div>

              <Pricing_one/>
              <Pricing_two/>
              <Pricing_three/>

  
          </div> 
        },
        {
          path: "/about",
          element:
          <div>

              <About_one/>
              <About_two/>

  
          </div> 
        },
        {
          path: "/contact",
          element:
          <div>

              <Contact/>

          </div> 
        },

      ]
      
    },
    {
        path: "/home",
        element: 
        <div>

            <Home/>

        </div>,
      },
      {
        path: "/feature",
        element:
        <div>

            <Feature_one/>
            <Feature_two/>
            <Feature_three/>

             
        </div> 
      },
     
      {
        path: "/pricing",
        element:
        <div>

            <Pricing_one/>
            <Pricing_two/>
            <Pricing_three/>


        </div> 
      },
      {
        path: "/about",
        element:
        <div>
 
            <About_one/>
            <About_two/>


        </div> 
      },
      {
        path: "/contact",
        element:
        <div>

            <Contact/>/
 
        </div> 
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <RouterProvider router={router} />
 
);







