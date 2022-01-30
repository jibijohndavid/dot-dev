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
        !disableHero && "h-96"
      }  bg-purple-dark bg-header-img bg-left`}
    >
      <UIContainer className="w-full">
        <main className="max-w-2xl mt-10">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              {disableHero ? null : (
                <span className="text-base text-gray-300 sm:text-lg md:text-xl font-normal">
                  👋 Hello, I am
                </span>
              )}

              <span className="mt-2 md:mt-0 block text-white font-beyno tracking-widest">
                {title}
              </span>
            </h1>
            {disableHero ? null : (
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Passionate Javascript Engineer based in
                <Link href="https://marvelcinematicuniverse.fandom.com/wiki/Earth">
                  <a rel="noreferrer" target="_blank" className="font-bold">
                    &nbsp;C-53<span className="text-xs">🔗 </span>
                  </a>
                </Link>
                and I love to share and collaborate. I am looking for creative
                minds to work, grow and network. Feel free to contact me.
              </p>
            )}
          </div>
        </main>
      </UIContainer>
    </header>
  );
};

export default Header;
