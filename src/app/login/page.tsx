"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "@/utils/session";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  return (
    <div className="w-full h-[800px] flex items-center place-content-center">
      <div className="border border-opacity-5 shadow-md drop-shadow-2xl border-secondary  w-[320px] h-[500px] rounded-lg text-center p-2 items-center flex flex-col">
        <h1 className="text-text text-2xl uppercase font-heading">Login</h1>
        <form action="">
          <div className="space-y-4 mt-4">
          <input type="text" placeholder="Username or E-mail address" className="w-3/4 h-[35px] p-2 outline-none bg-transparent border border-secondary border-opacity-20 rounded-md placeholder:text-secondary placeholder:text-opacity-80 text-secondary"/>
          <input type="password" placeholder="Password" className="w-3/4 h-[35px] p-2 outline-none bg-transparent border border-secondary border-opacity-20 rounded-md placeholder:text-secondary placeholder:text-opacity-80 text-secondary"/>
          <input type="submit" value="Login" className="w-3/4 h-[35px] outline-none bg-primary text-white rounded-md cursor-pointer font-body"/>
          </div>
        </form>
        <div className="flex w-3/4 leading-[18px] mt-4">
          <p className="text-left w-1/2">
          <p className="text-secondary">Don't have an account?</p>
          <Link href="/register" className="text-primary">
            Register
          </Link>
          </p>

          <p className="text-right w-1/2">
          <p className="text-secondary">Forgot password?</p>
          <Link href="/register" className="text-primary">
            Click here!
          </Link>
          </p>
        </div>
        <div className="w-3/4 flex p-2 space-x-2 justify-around">
          <button className="w-1/2 rounded-md bg-blue-600">Facebook</button>
          <button className="w-1/2 rounded-md bg-red-600">Google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
