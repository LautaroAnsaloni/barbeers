'use client';

import Link from "next/link";
import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.
    useState(false);

    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
      try {
        setLoading(true);
        const { data } = await axios.post("/api/users/signup", user);
        toast.success(data.message);
        router.push("/login");
      } catch (error) {
        console.log("Error de registro", error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
      if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }, [user]);

    return (
        <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form className="bg-zinc-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-gray-700 text-3xl text-center m-5 font-bold">
            {loading ? "Cargando..." : "Registro"}
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Nombre de usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Ingrese su nombre"
            />
          </div>
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
              value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Ingrese su correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Ingrese su contraseña"
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
              className="bg-gray-950 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onSignup}
              type="button"
            >
              {buttonDisabled ? "Registrarse" : "Registrarse"}
            </button>
          </div>
          <div className="mt-4">
            <Link
              className="text-sm text-blue-500 hover:text-blue-700"
              href="/reset-password"
            >
              Olvidaste tu contraseña?
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
    )
}