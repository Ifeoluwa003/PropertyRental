import "./home.css"
import Navbar from "../components/nav/nav"
import Footer from "../components/footer/footer"
import { Link, useNavigate } from "react-router-dom"
import { FaAccessibleIcon } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaRandom } from "react-icons/fa";

import React from 'react'

function Homepage() {
  return (
    <div>
      <Navbar/>
      <section className="heroSection">
        <div className="heroSectionM">

          <div className="heroSectionText">
            <h1>Luxury homes</h1>
            <h2>made just for you</h2>
            <small>Wonderful houses near your vicinity with all modern amenities <br /> and advantages, where peace and tranquility reigns!</small>
            <button className="explbtn"><Link to={"/propertylist"}>Explore More</Link></button>
          </div>

          <img src="/assets/04.jpg" alt="" width={550}/>

        </div>
      </section>

      <div className="featureSection">
        <div className="featureSection1">
          <h1>Features</h1>
          <small>Perfect blend of style and comfort in this beautifully <br /> designed homes with premium touches and finishes</small>
          <img src="/assets/05.jpg" alt="" width={150}/>

        </div>

        <div className="featureSection2">
          <h5>Lovingly designed for individuals and families, with ample <br /> spaces, facilities and community amenities</h5>
          
          <div className="fs2B">
            <div className="fs2B1">
              <div className="fs2B1p"><FaAccessibleIcon className="icon"/> <br /> <h4>Accessibility</h4></div>
              <small>Proximity to amenities <br /> and ease of movement <br />within the house</small>
            </div>

            <div className="fs2B2">
              <div className="fs2B2p"><FaHelmetSafety className="icon"/> <br /> <h4>Safety</h4></div>
              <small>Secure doors and wi- <br />ndows as well as the<br /> emergency exits</small>
            </div>

            <div className="fs2B3">
              <div className="fs2B3p"><FaRandom className="icon"/> <br /> <h4>Sustainability</h4></div>
              <small>Attractive designs and <br />landscaping alongside <br />eco-friendly features</small>
            </div>
            
          </div>

        </div>

      </div>

      <section className="map">
        <div className="mapHeader">
          <h1>How to locate us</h1> 
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.4959217446485!2d3.929652074544322!3d7.427283012002334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed3c6aff5221%3A0xd556396ca8fcacea!2sVine%20Store!5e1!3m2!1sen!2sng!4v1771286080896!5m2!1sen!2sng">
        </iframe>

        <div className="locationCard">
          <h2>Where to find us</h2>
          <h3>For enquiries our contact details and address can <br />be found below:</h3>
          <h3>Address: No.36, Vine store bus-stop, Ashi-bodija, <br /> Ibadan, Oyo State</h3>
          <h3>E-mail: ifeoluwafolorunsho11@gmail.com</h3>
          <h3>Telephone: 08030949480</h3>
        </div>
      </section>
      <Footer/>

    </div>
    
  )
}

export default Homepage