'use client'
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="container flex px-4 text-center my-10 ">
      <div className="container flex-1 flex justify-end w-full relative h-fit">
        <Image isBlurred isZoomed src="/main.png" alt="Aashil Singhal" className="object-cover" width={300} />
      </div>
      <div className="container flex-1 text-left px-10  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl w-full  h-fit">
        <p className="font-bold text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl">Hi, I am <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Aashil Singhal</span></p>
        <p>I am a Devops Enthusiast, currently studying at <Link href="https://iiitkota.ac.in/" className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl" color="danger" isExternal >IIIT Kota</Link></p>
      </div >
    </div >
  );
}
