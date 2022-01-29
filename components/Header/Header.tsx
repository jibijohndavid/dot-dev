import Image from "next/image";
import Link from "next/link";
import UIContainer from "../Layout/UIContainer";
import Script from "next/script";

const Header = () => {
  return (
    <div className="overflow-hidden">
      <div id="frozen" className="relative">
        <header className="flex items-center h-96 lg:h-[1500px] bg-dark bg-header-img bg-left">
          <UIContainer className="w-full">
            <div className="container px-6 py-16 mx-auto text-center">
              <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold text-white md:text-4xl ">
                  Welcome to my Digital Home, Great seeing you around
                </h1>
                <p className="mt-6 mb-8 text-gray-300">
                  I love to share and collaborate. Looking for creative minds to
                  work, grow and network.
                </p>
                <Link href="mailto:jibijohndavid@gmail.com">
                  <a className="w-full px-5 py-2 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-purple-700 rounded-md lg:w-auto hover:bg-purple-800 focus:outline-none focus:bg-purple-800">
                    Connect with me
                  </a>
                </Link>
                <p className="mt-3 text-sm text-gray-400 ">#livelearnevolve</p>
              </div>
            </div>
          </UIContainer>
          <Script src="/scripts/snow.js" />
        </header>
      </div>
    </div>
  );
};

export default Header;
