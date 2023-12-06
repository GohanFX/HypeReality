"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(username && password) {
        const authReq = await axios.post("/api/v1/auth/login", {
            username: username,
            password: password
        });
        if(authReq.status === 200) {
            alert("HAPPY")
        } else {
            alert(authReq.status)
        }
    }
  };

  return (
    <div className="w-full h-screen flex items-center place-content-center">
      <div className="h-3/4 uppercase text-center space-y-10 text-3xl font-heebo text-secondary font-bold w-2/6 p-2">
        <h1>Bejelentkezés</h1>
        <div className="text-lg   w-full space-y-8">
          <input
            type="text"
            placeholder="Felhasználó név"
            className="border-b-2 w-3/5 placeholder:text-secondary placeholder:opacity-75 placeholder:uppercase  border-text bg-transparent text-[30] text-secondary font-normal outline-none"
          />
          <input
            type="text"
            placeholder="Jelszó"
            className="border-b-2 w-3/5 border-text bg-transparent placeholder:text-secondary placeholder:opacity-75 placeholder:uppercase text-[30] text-secondary font-normal outline-none"
          />
        </div>
        <div className="w-full font-light flex place-content-center">
          <div className="w-3/5 flex">
            <div className="w-1/2 text-left text-sm uppercase text-secondary">
              <p>Not registered yet?</p>
              <Link href={'/register'} className="font-semibold text-primary">
              Register
              </Link>
            </div>
            <div className="w-1/2 text-right text-sm uppercase text-secondary">
              <p>Can't sign in?</p>
              
              <Link className="font-semibold text-accent" href="forgot">
              Click here
              </Link>
            </div>
          </div>
        </div>

        <button className="w-3/5 text-primary text-lg bg-secondary rounded-sm h-12" onClick={handleSubmit}>
          {" "}
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
