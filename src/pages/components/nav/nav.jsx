import "./nav.css"
import {Link} from "react-router-dom"
import { CgShoppingCart } from "react-icons/cg";


import React from 'react'

function Navbar() {
  return (
    <div>
      <nav>

        <div className="nav1">
          <h1>NestFind</h1>
        </div>

        <div className="nav2">
          <Link to={"/"}>HOME</Link>
          <Link to={"/propertylist"}>PROPERTY LIST</Link>
          <Link to={"/bookingform"}>BOOKING FORM</Link>
        </div>

        <div>
          <button className="cartBtn"><Link to={"/cart"}><CgShoppingCart className="cartt" /> </Link> </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar