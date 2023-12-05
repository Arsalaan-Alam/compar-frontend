"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArConnect } from 'arweavekit/auth'

export default function Home() {

  const [user, setUser] = useState({ loggedIn: null });
  
  const AuthedState = () => {
    return (
      <div>
        Connected Successfully! Redirecting...
      </div>
    )
  }
  
  const UnauthenticatedState = () => {
    return (
      <div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-600 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-bold">
          Connect Wallet
        </button>
      </div>
    )
  }


  return (
    <section
      className="flex items-center justify-center h-screen">
      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1 mb-24" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1270" cy="100" r="64" />
            <circle cx="75" cy="500" r="64" />
          </g>
        </svg>
      </div>

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
          
          <h1 className="text-8xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">File Management on Arweave <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Made Easy.</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Compress your files easily with our decentralized compression service. Maintain access-control over your files. Save space and maintain the integrity of your data on Arweave.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              {user.loggedIn ? <AuthedState /> : <UnauthenticatedState /> }
             
              </div>
            </div>
          </div>         
        </div>
      </div>
    </section>
  );
}