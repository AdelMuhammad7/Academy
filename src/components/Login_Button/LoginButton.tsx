"use client"

import { LogIn } from "lucide-react"
import { useRouter } from 'next/navigation';

function LoginButton() {
    const router = useRouter();


  return (
    <button
        onClick={()=> router.push("/login")}
        className="cursor-pointer border rounded-2xl p-2 text-primaryrounded-lg flex items-center gap-2 justify-center transition bg-white hover:bg-primary hover:text-secondary "
    >
        Log In <LogIn size={18} />
    </button>
  )
}

export default LoginButton