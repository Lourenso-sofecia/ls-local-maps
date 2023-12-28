import React from "react";
import Image from "next/image";

import voltarImg from "@/assets/Voltar.png";

import logo from "@/assets/logo.png";

import map from "@/assets/map.png";

import map_buttom from "@/assets/map_buttom.png";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 ">
        <Link href={"/"} className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
            <Image
                className="w-[44px] h-[54px]"
                src={map}
                alt=""
                width={44}
                height={54}
            />
            <Image
                className="w-[12px] h-[12px]"
                src={map_buttom}
                alt=""
                width={12}
                height={12}
            />
            </div>

            <Image
            className="w-[152px] h-[34px]"
            src={logo}
            alt=""
            width={152}
            height={34}
            />
      </Link>
      <Link href="/" className="flex items-center gap-3">
        <Image
          className="w-[20px] h-[20px]"
          src={voltarImg}
          alt=""
          width={20}
          height={20}
        />
        <p>Voltar para a home</p>
      </Link>
    </header>
  );
}
