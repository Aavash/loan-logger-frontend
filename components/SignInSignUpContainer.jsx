import React from 'react'
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
import NextLink from "next/link"

function SignInSignUpContainer(props) {
  return (
    <div className="bg-gradient-to-r from-green-300 via-yellow-50 to-green-300 block h-screen items-center justify-center p-4 md:flex ">

        <div className="bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row ">
        
            <div className="backdrop-blur-sm backdrop-filter flex flex-col itmes-center justify-center p-4 text-white w-full md:w-1/2 ">
                <h1 className="font-medium text-3xl">Your own loan Manger </h1>
                <p className="italic text-lg " >So you dont have to remember everything</p>

            </div>
            {/* FORM */}
            <div className="bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2 ">
            
            {/* welcome text */}
            <div className="flex flex-col items-center">
                <h1 className="font-medium text-green-400 tex-xl ">Welcome back</h1>
                <p>Login to your account</p>
            </div>


            {props.logout ? <RegisterForm/> : <SignInForm/> }
            
            <div className="flex flex-col items-center">
                <p className="italic">
                    Join us now
                    <NextLink href="/register">
                        <a className="m1-1 text-green-500 hover:underline">Register Here</a>
                    </NextLink>
                </p>
                {/* <p className="italic">
                    Lost your password?
                    <NextLink href="/">
                        <a className="m1-1 text-green-500 hover:underline">Reset Password</a>
                    </NextLink>
                </p> */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default SignInSignUpContainer