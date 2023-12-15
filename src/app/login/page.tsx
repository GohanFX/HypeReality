"use client";
import React, { useReducer, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "@/components/Session/SessionContext";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {getIsLoggedIn, setIsLoggedIn} = useSession();
  const handleSubmit = async () => {
    console.log(username, password);
    if (username && password) {
      try {
        const authReq = await axios.post("/api/v1/auth/login", {
          username: username,
          password: password,
        });
        if (authReq.status === 200) {
          router.push("/");
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center place-content-center">
      <div className="h-3/4 uppercase text-center space-y-10 text-2xl md:text-3xl font-extrabold text-secondary md:w-2/6 w-1/2 p-2">
        <h1 className="-ml-2">Bejelentkezés</h1>
        <div className="text-lg  w-full space-y-8">
          <div>
            <input
              type="text"
              placeholder="Felhasználó név"
              onChange={(e) => setUsername(e.target.value)}
              className="border-b-2 w-3/4 md:w-3/5 placeholder:text-secondary placeholder:opacity-75 placeholder:uppercase  border-text bg-transparent text-[30] text-secondary font-normal outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Jelszó"
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2 w-3/4 md:w-3/5 border-text bg-transparent placeholder:text-secondary placeholder:opacity-75 placeholder:uppercase text-[30] text-secondary font-normal outline-none"
            />
          </div>
        </div>
        <div className="w-full font-light flex place-content-center">
          <div className=" w-3/4 md:w-3/5 flex text-lg">
            <div className="w-1/2 text-left uppercase text-secondary">
              <p>Not registered yet?</p>
              <Link href={"/register"} className="font-semibold text-primary">
                Register
              </Link>
            </div>
            <div className="w-1/2 text-right uppercase  text-secondary">
              <p>Can't sign in?</p>

              <Link className="font-semibold text-accent" href="forgot">
                Click here
              </Link>
            </div>
          </div>
        </div>

        <button
          className="w-3/5 text-primary text-lg bg-secondary rounded-sm h-12"
          onClick={handleSubmit}
        >
          {" "}
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
