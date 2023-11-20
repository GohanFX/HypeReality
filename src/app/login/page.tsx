'use client'
import React, { useState } from 'react';

interface LoginFormProps {
    onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(username, password);
    };

    return (
        <div className='w-full h-screen flex items-center place-content-center'>
            <div className='h-3/4 uppercase text-center space-y-10 text-3xl font-heebo text-secondary font-bold w-2/6 p-2'>
                <h1>Bejelentkezés</h1>
                <div className='text-lg   w-full space-y-8'>
                    <input type="text" placeholder='Felhasználó név' className='border-b-2 w-3/5 placeholder:text-secondary placeholder:opacity-75 placeholder:uppercase  border-text bg-transparent text-[30] text-secondary font-normal outline-none'/>
                    <input type="text" placeholder='Jelszó' className='border-b-2 w-3/5 border-text bg-transparent placeholder:text-secondary placeholder:opacity-75 placeholder:uppercase text-[30] text-secondary font-normal outline-none'/>
                </div>
                <div className='w-full font-light flex justify-between'>
                    <div className='w-1/2 text-sm uppercase text-secondary'>
                        <p>Not registered yet?</p>
                        <a href="" className='font-semibold text-primary'>Register</a>
                    </div>
                    <div className='w-1/2 text-sm uppercase text-secondary'>
                        <p>Can't sign in?</p>
                        <a href="" className='font-semibold text-accent'>Click here</a>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default LoginForm;
