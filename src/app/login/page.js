'use client';
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form className="bg-zinc-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-gray-700 text-3xl text-center m-5 font-bold">
            Login
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Iniciar con Google
            </button>
            <button
              onClick={onLogin}
              className="bg-gray-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Iniciar sesión
            </button>
          </div>
          <div className="mt-4">
            <Link
              className="text-sm text-blue-500 hover:text-blue-700"
              href="/reset-password"
            >
              Restablecer contraseña
            </Link>
          </div>
        </form>
        <div className="text-center mt-9">
          <Link href="/" className="">
            HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
