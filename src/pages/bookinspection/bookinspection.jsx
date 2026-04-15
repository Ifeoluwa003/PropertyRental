import "./bookinspection.css"
import { Link, useNavigate } from "react-router-dom"
import {toast, Toaster} from "sonner"
import { useState } from "react"



function Bookinspection() {



  const navigate = useNavigate()


    const [username, setUsername] = useState("")
    const [mobile, setMobile] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")


    function bookinspection(e){
      e.preventDefault()
      if(username.trim() ===""){
        toast.error("Please enter your username")
      }else if(mobile.trim() ===""){
        toast.error("Please enter your mobile")
      }else if(date.trim() ===""){
        toast.error("Please fill in all fields")
      }else if(time.trim() ===""){
        toast.error("Please fill in all fields")
      }else{
        localStorage.setItem("user", JSON.stringify({username, mobile, date, time}))
        toast.success("Inspection Booked Successfully")
        setTimeout(()=>{
          navigate("/")
        },1000)
          
      }

    }






  return (
    <div className="bookingPage">
      <Toaster position="top-right" richColors/>
      <div className="bookingCard">
        <h2>Book Inspection</h2>
        <p>Schedule a visit to inspect this property</p>

        <form className="bookingForm" onSubmit={bookinspection}>
          <input type="text" placeholder="Full Name" onChange={(e)=>{setUsername(e.target.value)}} required />
          <input type="tel" placeholder="Phone Number" onChange={(e)=>{setMobile(e.target.value)}} required />

          <div className="dateTime">
            <input type="date" onChange={(e)=>{setDate(e.target.value)}} required />
            <input type="time" onChange={(e)=>{setTime(e.target.value)}} required />
          </div>

          <textarea placeholder="Additional Message (optional)"></textarea>

          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  )
}

export default Bookinspection