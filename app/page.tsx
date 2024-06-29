'use client'
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="container flex px-4 text-center my-10">
      <div className="container flex-1 flex justify-end pr-6">
        <Image isBlurred isZoomed src="/main.png" alt="Aashil Singhal" width={300} />
      </div>
      <div className="container flex-1 text-left p-10">
        <p className="font-bold text-5xl">Hi, I am <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Aashil Singhal</span></p>
        <p className="text-2xl">I am a Devops Enthusiast, currently studying at <Link href="https://iiitkota.ac.in/" color="danger" isExternal isBlock className="text-2xl font-bold">IIIT Kota</Link></p>
      </div >
    </div >
  );
}
