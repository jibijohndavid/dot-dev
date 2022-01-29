import Image from "next/image";
import Link from "next/link";
import UIContainer from "../Layout/UIContainer";
import Script from "next/script";

const Header = () => {
  return (
    <div className="overflow-hidden">
      <div id="frozen" className="relative">
        <header className="flex items-center h-[40rem] md:h-96 bg-dark bg-header-img bg-left">
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
        <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-0.5 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fillRule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
