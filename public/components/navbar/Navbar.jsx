'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleLoginClick = () => {
        router.push('/login');
        setIsOpen(false);
    }

    const handleSignupClick = () => {
        router.push('/signup');
        setIsOpen(false);
    }

    const handleTurnClick = () => {
        router.push('/turnos');
        setIsOpen(false);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex items-center justify-between p-6 text-xl bg-gray-800 text-white">
            <h1 className="text-2xl">Barbeers</h1>
            <div className="items-center md:flex">
                <div className={`${isOpen ? '' : 'hidden'} md:flex`}>
                    <a className="block md:inline-block px-2 py-1 md:mx-2 hover:bg-gray-700" href='/'>Inicio</a>
                    <button className="block md:inline-block px-2 py-1 md:mx-2 hover:bg-gray-700" onClick={handleTurnClick}>Turnos</button>  
                    <button className="block md:inline-block px-2 py-1 md:mx-2 hover:bg-gray-700" onClick={handleLoginClick}>Login</button>
                    <button className="block md:inline-block px-2 py-1 md:mx-2 hover:bg-gray-700" onClick={handleSignupClick}>Signup</button>
                </div>
                <button className="md:hidden text-2xl" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

