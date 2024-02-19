import Head from "next/head";
import React from "react";

const Login = () => {
  return (
    <div>
      <Head>
        <title>OYO : Login !</title>
      </Head>
      <div className="flex h-screen justify-center items-center relative bg-login-backgroundImage bg-no-repeat bg-cover">
        <div className="absolute w-full top-10 px-20 flex items-center text-white">
          <h2 className="text-5xl font-bold mr-5">OYO</h2>
          <p className="font-bold text-2xl">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center w-9/12">
          <div className="text-white">
            <p className="font-bold text-5xl text-justify">
              There's a smarter way to OYO around
            </p>
            <p className="mt-10 text-2xl text-justify">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
            </p>
          </div>
          <div className="ml-20 w-10/12 border-2 border-red-500  bg-white">
            <p className="h-10 px-10 flex items-center bg-gradient-to-r from-red-600 to bg-orange-400 text-sm font-bold text-white">
              Sign up & Get $500 OYO Money
            </p>
            <div className="px-10">
              <h3 className="font-bold text-2xl my-5">Login / Signup</h3>
              <p className="font-bold text-lg mb-1">
                Please enter your Email ID to continue
              </p>
              <input
                type="text"
                placeholder="Enter your name..."
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10"
              />
              <input
                type="email"
                placeholder="Enter your email..."
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10"
              />
              <input
                type="password"
                placeholder="Enter your password..."
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10"
              />
              <button
                type="submit"
                className="mt-3 w-96 h-14 font-bold bg-red-400 hover:cursor-pointer hover:bg-red-600 text-white rounded-lg"
              >
                Sign Up
              </button>
              <p className="my-3 text-lg mb-20">
                <span>Already have an account ?</span>
                <span className="ml-3 text-red-400 border-b-2 border-red-500 pb-1 hover:cursor-pointer">
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
