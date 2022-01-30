import Image from "next/image";
import Link from "next/link";
import UIContainer from "../Layout/UIContainer";
import Script from "next/script";
import { useCallback, useState } from "react";

type HeaderProps = {
  title: string;
  disableHero?: boolean;
};

const Header = ({ title, disableHero = false }: HeaderProps) => {
  return (
    <header
      className={`flex items-center ${
        !disableHero && "h-72 md:h-96"
      }  bg-purple-dark bg-header-img bg-left`}
    >
      <UIContainer className="w-full">
        <main className="max-w-2xl mt-10">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              {disableHero ? null : (
                <span className="text-base text-gray-300 sm:text-lg md:text-xl font-normal">
                  👋 Hello, I a&apos;m
                </span>
              )}

              <span className="block text-white">{title}</span>
            </h1>
            {disableHero ? null : (
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Passionate Javascript Engineer based in C-53 and I love to share
                and collaborate. I am looking for creative minds to work, grow
                and network. Feel free to contact me.
              </p>
            )}
          </div>
        </main>
      </UIContainer>
    </header>
  );
};

export default Header;
