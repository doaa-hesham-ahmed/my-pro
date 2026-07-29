import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

import FooterStyle from "./Footer.module.css";
import ContactUs from './../ContactUs/ContactUs';


export default function Footer() {

  return (

    <footer className={FooterStyle.footer}>

      <div className="container">

        <div className="row gy-4">


          {/* About */}
          <div className="col-md-4">

            <h4>
              🍴 Recipe App
            </h4>

            <p>
              Discover delicious recipes and cook your favorite meals
              easily with our recipe collection.
            </p>


          </div>




          <div className="col-md-4"> <h4>  Quick Links</h4>


            <ul>

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>


              <li>
                <Link to="/about">
                  About
                </Link>
              </li>


              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>


              <li>
                <Link to="/register">
                  Register
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  ContactUs
                </Link>
              </li>

            </ul>


          </div>

          <div className="col-md-4">


            <h4>
              Contact Us
            </h4>


            <p>
              <FaEnvelope />
              example@gmail.com
            </p>


            <p>
              <FaPhone />
              +20 123 456 789
            </p>


            <p>
              <FaMapMarkerAlt />
              Egypt
            </p>



            <div className={FooterStyle.social}>

              <FaFacebook />

              <FaInstagram />

              <FaTwitter />

            </div>


          </div>



        </div>


        <hr />


        <p className="text-center mb-0">

          © 2026 Recipe App. All Rights Reserved.

        </p>


      </div>


    </footer>

  );
}