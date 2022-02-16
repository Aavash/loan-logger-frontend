import Router from 'next/router'
import React, { useState } from 'react'
import { handleLogin } from '../utils/login';

function SignInForm() {
  const [mobileNumber, setmobileNumber] = useState("");
  const [mobileNumberExt, setmobileNumberExt] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const data = {
      mobile_number: mobileNumber,
      mobile_number_ext: mobileNumberExt,
      password: password,
      device_id: "1234"
    }
    const response = await handleLogin(data);
    if (response.status === 201){
        Router.push("/")
    } else{
        alert('there was an error')
    }
}
  return (
    <div>
        <form className="flex flex-col items-center space-y-4" onSubmit={submitForm}>
          <div className="relative">
            {/* <UserIcon className="absolute flex w-8 h-8 text-gray-400" /> */}
            <input onChange={(e) => setmobileNumber(e.target.value)} name="mobile_number" type="text" className="border border-gray-300 outline-none placeholder-gray-400 p1-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300 " placeholder="Mobile Number"  />
          </div>

          <div className="relative">
            {/* <UserIcon className="absolute flex w-8 h-8 text-gray-400" /> */}
            <input onChange={(e) => setmobileNumberExt(e.target.value)} name="mobile_number_ext" type="text" className="border border-gray-300 outline-none placeholder-gray-400 p1-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300 " placeholder="Mobile Number Ext"  />
          </div>

          <div className="relative">
            {/* <span><LockClosedIcon className=" absolute flex w-8 h-8 text-gray-400" /></span> */}
            <input onChange={(e) => setPassword(e.target.value)} name="assword" type="password" className="border border-gray-300 outline-none placeholder-gray-400 p1-9 pr-4 py-1 rounded-md transition focus:ring-2 focus:ring-green-300 " placeholder="Password"  />
          </div>

          <button className='bg-green-400 font-medium inilne-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500' type="submit">
          {/* <UserIcon className="absolute align-center w-8 h-8" /> */}
            Login Now
          </button>
        </form>
    </div>
  )
}

export default SignInForm