import axios from 'axios';
import React, { useState } from 'react'
import Router from 'next/router'

function RegistrationForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [mobileNumberExt, setMobileNumberExt] = useState("+977");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            `${process.env.API_BASE_URL}/v1/user/user-register`, 
            {
                full_name: fullName,
                email,
                mobile_number: mobileNumber,
                mobile_number_ext: mobileNumberExt,
                password: password,
                confirm_password: confirmPassword,
                device_id: "1234"
            }).then(res => {
                console.log(res)
                return res;
            }).catch((error) => {
                console.log('there was an error')
                return error;
            });
        if (response.status === 201){
            Router.push("/login")
        } else{
            alert('there was an error')
        }
    }

    return (
        <div>
            <form className="flex flex-col items-center space-y-4" onSubmit={submitForm} >
                <div className="relative">
                <input onChange={(e) => setFullName(e.target.value)} type="text" className="border border-gray-300 outline-none placeholder-gray-400 p1-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300 " placeholder="Full Name" name="full_name" />
                </div>
                <div className="relative">
                <input  onChange={(e) => setMobileNumber(e.target.value)} type="text" className="border border-gray-300 outline-none placeholder-gray-400 p1-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300 " placeholder="Mobile Number" name="mobile_number" />
                </div>
                <div className="relative">
                <input  onChange={(e) => setMobileNumberExt(e.target.value)} type="text" className="border border-gray-300 outline-none placeholder-gray-400 p1-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300 " placeholder="Mobile Number Ext"  name="mobile_number_ext"/>
                </div>
                <div className="relative">
                <input  onChange={(e) => setEmail(e.target.value)} type="email" className="border border-gray-300 outline-none placeholder-gray-400 p1-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300 " placeholder="Email" name="email" />
                </div>

                <div className="relative">
                <input  onChange={(e) => setPassword(e.target.value)} type="password" className="border border-gray-300 outline-none placeholder-gray-400 p1-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300 " placeholder="Password" name="password" />
                </div>
                <div className="relative">
                <input  onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="" className="border border-gray-300 outline-none placeholder-gray-400 p1-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300 " placeholder="Confirm Password" name="confirm_password" />
                </div>

                <button className='bg-green-400 font-medium inilne-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500' type="submit">
                Register Now
                </button>
            </form>
        </div>
    )
}

export default RegistrationForm