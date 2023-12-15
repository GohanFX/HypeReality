"use client";
import React, { useReducer, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "@/components/Session/SessionContext";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");   
  const router = useRouter();
  const session = useSession();
  const handleSubmit = async () => {
    console.log(username, password);
    if (username && password) {
      try {
        const authReq = await axios.post("/api/v1/auth/register", {
          username: username,
          email: email,
          password: password,
        });
        if (authReq.status === 200) {
          router.push("/");
          router.refresh();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center place-content-center">
      <div className="h-3/4 uppercase text-center space-y-10 text-2xl md:text-3xl font-heebo text-secondary font-bold md:w-2/6 w-1/2 p-2">
        <h1 className="-ml-2">Registration</h1>
        <div className="text-lg  w-full space-y-8">
          <div>
            <input
              type="text"
              placeholder="E-mail address"
              onChange={(e) => setEmail(e.target.value)}
              className="focus:bg-transparent border-b-2 w-3/4 md:w-3/5 placeholder:text-secondary placeholder:opacity-75 placeholder:uppercase  border-text bg-transparent text-[30] text-secondary font-normal outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="focus:bg-transparent border-b-2 w-3/4 md:w-3/5 border-text bg-transparent placeholder:text-secondary placeholder:opacity-75 placeholder:uppercase text-[30] text-secondary font-normal outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="focus:bg-transparent border-b-2 w-3/4 md:w-3/5 border-text bg-transparent placeholder:text-secondary placeholder:opacity-75 placeholder:uppercase text-[30] text-secondary font-normal outline-none"
            />
          </div>
        </div>
        <div className="w-full font-light flex place-content-center">
          <div className=" w-3/4 md:w-3/5 flex">
            <div className="w-1/2 text-left text-sm uppercase text-secondary">
              <p>Do you have an account?</p>
              <Link href={"/login"} className="font-semibold text-primary">
                Login
              </Link>
            </div>
           
          </div>
        </div>

        <button
          className="w-3/5 text-primary text-lg uppercase bg-secondary rounded-sm h-12"
          onClick={handleSubmit}
        >
          {" "}
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
