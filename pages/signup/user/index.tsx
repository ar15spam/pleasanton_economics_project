import React, { useState, useEffect } from 'react'
import axios from "axios"

type Props = {}

export default function index({}: Props) {

  const[name, setName] = useState(""); 
  const[email, setEmail] = useState(""); 
  const[password, setPassword] = useState(""); 
  const[phoneNumber, setPhoneNumber] = useState(""); 

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/signup", ({ name, email, password, phoneNumber }))
      .then((result) => console.log(result))
      .catch((error) => console.log(error))
      console.log({ name, email, password, phoneNumber }); 
      console.log("post function called."); 
      } catch (error) {
      console.log("error:", error); 
      }
    }

  return (
    <div className = "w-screen h-screen bg-white flex flex-wrap items-center justify-center mx-5 gap-5">
      <h1>Sample Signup Page</h1>
      <div className = "w-1/2 h-3/4 font-black bg-black text-black text-lg flex flex-col items-center">
        <form>
          <div>
            <h2>Enter your name.</h2>
            <input placeholder='Enter your username' type="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <h2>Enter your email.</h2>
            <input placeholder='Enter your email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <h2>Enter your password.</h2>
            <input placeholder='Enter your password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div>
            <h2>Enter your phone number.</h2>
            <input placeholder='Enter your phone number.' type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
          </div>
          <button type='button' className = "bg-red-500 mt-5" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}