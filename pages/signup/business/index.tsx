import React, { useState } from 'react';
import axios from "axios";

type Props = {}

export default function index({}: Props){

    const [name, setName] = useState(""); 
    const [categories, setCategories] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [address, setAddress] = useState(""); 
    const [phoneNumber, setPhoneNumber] = useState(""); 

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const formData = {
            name: name, 
            categories: categories, 
            email: email,
            password: password,
            address: address,
            phoneNumber: phoneNumber
        }; 
        try {
            const response = await axios.post("http://localhost:8080/api/businessSignUp", formData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="w-screen h-screen bg-white flex flex-wrap items-center justify-center mx-5 gap-5">
            <h2>Business Sign Up Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Categories:</label>
                    <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


