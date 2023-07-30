import Link from "next/link";

export default function UserProfile({params}) {
    return  (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="py-5">Profile</h1>
            <hr/>
            <p className="text-4xl ">Perfil de 
            <span className="text-black rounded ml-3 bg-orange-600 p-2">{params.id}</span>
            </p>
            <Link className='my-5' href="/">Home</Link>
            </div>
    )
}