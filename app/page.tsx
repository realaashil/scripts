'use client'
import { Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="container">
      <div className="grid p-16  lg:grid-cols-2 place-content-end justify-items-center lg:justify-items-end gap-8">
        <Image src="/main.png" alt="Aashil Singhal" className="rounded-full w-1/3 aspect-square object-cover mr-16" removeWrapper={true} />
        <div className="lg:text-5xl flex flex-col">
          <p className="font-bold">Hi, I am <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-text">Aashil Singhal</span></p>
          <p className="lg:text-3xl">I am a Devops Enthusiast, currently studying at <Link href="https://iiitkota.ac.in/" className="font-bold lg:text-3xl" color="danger" isExternal >IIIT Kota</Link></p>
        </div >
      </div >
    </div>
  );
}
