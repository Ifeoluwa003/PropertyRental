import "./propertylist.css"
import Navbar from "../components/nav/nav"
import { Link, useNavigate } from "react-router-dom"
import { CgShoppingCart } from "react-icons/cg";
import { IoIosArrowDropright } from "react-icons/io";

import React from 'react'



function Propertylist() {
  return (
    <div>
      <Navbar/>

      <div className="listHeader">
        <h1>Elevate Your Space <br /> to Beautiful <br /> Homes</h1>
        <button className="lhBtn"><Link to={"/bookingform"}>Rent Now</Link></button>
      </div>

      <div className="availHeader">
        <h1>Our Available Spaces</h1>
      </div>

      <div className="wsection">
        <div className="wsection1">
          <img src="/assets/hs2.jpg" alt="" width={150} height={150}/>
          <div className="wsection1Info">
            <h3>One Bedroom Apartment</h3>
            <h5>📍 45 Parklane Street, Bodija, Ibadan</h5>
            <small>"A suitable one-bedroom apartment featuring <br /> a sitting room, private bedroom with en-suite<br /> bathroom and toilet, and a modern kitchen"</small>
          </div>
          <div className="wsBtn1">
            <Link to={"/cart"} className="contactBtn1"> Contact </Link>
            <Link to={"/cart"} className="cartBtn1"><CgShoppingCart className="cartt1" /> </Link>
          </div>
        </div>

        <div className="wsection2">
          <img src="/assets/hs3.jpg" alt="" width={150} height={150}/>
          <h3>Two Bedroom Apartment</h3>
          <h5>📍 12 Bodija Road, Bodija, Ibadan</h5>
          <small>"A spacious two-bedroom apartment featuring <br /> a sitting room, two well-sized bedrooms, <br /> bathrooms and toilets, and a modern kitchen"</small>
          <div className="wsBtn2">
            <button className="contactBtn"><Link to={"/cart"}> Contact </Link></button>
            <button className="cartBtn"><Link to={"/cart"}><CgShoppingCart className="cartt" /> </Link> </button>
          </div>
        </div>

        <div className="wsection3">
          <img src="/assets/hs5.jpg" alt="" width={150} height={150}/>
          <h3>Three Bedroom Apartment</h3>
          <h5>📍 6 Agodi GRA, Agodi, Ibadan</h5>
          <small>"A suitable three-bedroom apartment featuring <br /> a sitting room, three well-sized bedrooms, <br /> bathrooms and toilets, and a modern kitchen"</small>
          <div className="wsBtn3">
            <button className="contactBtn"><Link to={"/cart"}> Contact </Link></button>
            <button className="cartBtn"><Link to={"/cart"}><CgShoppingCart className="cartt" /> </Link> </button>
          </div>
        </div>

        <div className="wsection3">
          <img src="/assets/hs5.jpg" alt="" width={150} height={150}/>
          <h3>Three Bedroom Apartment</h3>
          <h5>📍 6 Agodi GRA, Agodi, Ibadan</h5>
          <small>"A suitable three-bedroom apartment featuring <br /> a sitting room, three well-sized bedrooms, <br /> bathrooms and toilets, and a modern kitchen"</small>
          <div className="wsBtn3">
            <button className="contactBtn"><Link to={"/cart"}> Contact </Link></button>
            <button className="cartBtn"><Link to={"/cart"}><CgShoppingCart className="cartt" /> </Link> </button>
          </div>
        </div>
        

      </div>

        
            

      
    </div>
  )
}

export default Propertylist