import React from "react";
import Header from "@/components/header";

function Login() {
    return (
        <div className="flex justify-center items-center min-h-full">
            <div className="w-1/2 grid content-center justify-items-center">
                <div className="text-darkpink text-header font-bold"> WELCOME TO </div>
                <div className="text-darkgreen text-header font-bold">BLOCKET</div>
            </div>
            <div className="w-1/2 h-[580px] w-[840px] bg-darkpink grid content-center justify-items-center">
                <div className="text-white text-3xl font-bold">Sign in to TIMEBLOCK</div>
                <div className="h-[80px] w-[420px] bg-white flex justify-center items-center">Sign in with Google</div>
                <div className="grid grid-cols-2 gap-2 content-center">
                    <div className="text-white">Don't have account?</div>
                    <a href="/register">Register</a>
                </div>
            </div>
        </div>
    )
  }
  
  export default Login