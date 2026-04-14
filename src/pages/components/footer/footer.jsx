import "./footer.css"
import {Link} from "react-router-dom"
import { TiSocialFacebook } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { MdOutlineCopyright } from "react-icons/md";
 

import React from 'react'

function Footer() {
  return (
    <div>
      <footer>

        <div className="footer">
          <div className="footer1">
            <h3>NESTFIND</h3> <br /> <small className="footer1Small">Opening hours 8:00am - 18:00pm</small>

            <div className="footer1Icons">
              <p className="ficon1"><a href="https://www.facebook.com" target="_blank"><TiSocialFacebook /></a></p>
              <p><a href="https://x.com" target="_blank"><RiTwitterXFill /></a></p>
              <p><a href="https://www.instagram.com" target="_blank"><FaInstagram /></a></p>
              <p><a href="https://www.youtube.com" target="_blank"><FiYoutube /></a></p>
            </div>
          </div>

          <div className="footer2">
            <h4>CONTACTS</h4>
            <h5><a href="tel:+2348030949480">080-3094-9480</a>  <br /> <a href="mailto:ifeoluwafolorunsho11@gmail.com">ifeoluwafolorunsho11@gmail.com</a>  </h5>         
            <h5><a href="https://www.google.com/maps/search/Ashi-Bodija,+Ibadan,+Oyo+State,+Nigeria" target="_blank">No.36, Vine store bus-stop, Ashi-bodija, <br /> Ibadan, Oyo State</a></h5>
          </div>

          <div className="footer3">
            <h4>LINKS</h4>
            <div>
              <h6> <Link to ={"/"}>Home</Link> <br /> <Link to ={"/propertylist"}>Property list</Link> <br /> <Link to ={"/bookingform"}>Booking form</Link></h6>
            </div>

          </div>
                  
        </div>

        <div className="lowerFooter">
          <small>Copyright <MdOutlineCopyright /> 2026 Home. All Rights Reserved.</small>
        </div>

      </footer>
      
    </div>
  )
}

export default Footer