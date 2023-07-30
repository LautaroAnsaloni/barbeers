import Image from "next/image";
import Navbar from "../../public/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <Navbar className='text-7xl'/>

      <Image
        src="/assets/images/pexels-thgusstavo-santana-2035308-1603280940.jpg"
        alt="barbeers"
        width={1260}
        height={200}
      />
    </main>
  );
}
