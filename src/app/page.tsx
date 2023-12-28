import Image from "next/image";

import loginImg from "@/assets/Login.png";

import mapImg from "@/assets/mapImg.jpg";
import mapBackgroundImg from "@/assets/mapBackgroundImg.png";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex max-[1024px]:flex-col min-h-screen lg:items-center sm:justify-center sm:p-6 p-4 lg:gap-40 gap-10">
      <section className="flex flex-col sm:gap-6 gap-4 ">
        <div className="sm:w-[420px] w-full">
          <h1 className="text-indigo-950 sm:text-[54px] text-2xl font-bold font-['Ubuntu'] sm:leading-[64px]">
            O mapa local de sua cidade
          </h1>
        </div>
        <p className=" text-gray-500 sm:text-2xl text-xl font-normal font-['Roboto'] sm:leading-[38px]">
          Encontre no comércio local tudo o que precisa!
        </p>
        <Link href="auth" className="sm:w-[360px] w-full flex cursor-pointer">
          <div className="w-[72px] max-[380px]:w-[40px] max-[380px]:px-4 p-6 flex items-center justify-center bg-indigo-500 rounded-tl-lg rounded-bl-lg">
            <Image className="w-[24px] h-[24px]" src={loginImg} alt="" width={24} height={24} />
          </div>
          <div className="lg:w-[360px] w-full max-[380px]:px-4 p-6 flex sm:items-center sm:justify-center bg-indigo-950 rounded-tr-lg rounded-br-lg">
            <p className="text-right text-white text-base font-bold font-['Roboto']">
              Cadastre um ponto comercial
            </p>
          </div>
        </Link>
      </section>
      <section className="">
        <div>
          <Image className="max-[1024px]:w-full" src={mapImg} alt="" width={400} height={100}  />
          {/*<div className="w-96 h-80 transform rotate-90 origin-top-left bg-white"></div>*/}
        </div>
      </section>
    </main>
  );
}
