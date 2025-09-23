import React from 'react'
import Image from "next/image"
import LoginPage from './LoginPage'
import img from "../../../public/imgs/logo.jpeg"

function Page() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-800 p-4">
        <div className="flex w-full max-w-5xl flex-col md:flex-row items-center justify-between gap-10 p-6 bg-white rounded-2xl shadow-lg">
          
          {/* الصورة */}
          <div className="relative w-full md:w-1/2 h-[200px] md:h-[400px] flex justify-center">
            <Image 
              src={img} 
              alt="Logo"
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>


          {/* فورم تسجيل الدخول */}
          <div className="w-full md:w-1/2">
            <LoginPage />
          </div>
        
        </div>  
      </div>
    </>
  )
}

export default Page
