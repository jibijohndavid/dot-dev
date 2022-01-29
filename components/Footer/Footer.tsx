import Link from "next/link";
import UIContainer from "../Layout/UIContainer";

type TextLinkProps = {
  title: string;
  href: string;
};

type IconLinkProps = {
  href: string;
  children: React.ReactNode;
};

const TextLink = ({ title, href }: TextLinkProps) => (
  <Link href={href}>
    <a className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
      {title}
    </a>
  </Link>
);

const IconLink = ({ href, children }: IconLinkProps) => (
  <Link href={href}>
    <a className="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
      {children}
    </a>
  </Link>
);

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-darker">
      <UIContainer>
        {/* <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li className="my-2">
            <TextLink title="Blog" href="#" />
          </li>
          <li className="my-2">
            <TextLink
              title="Github"
              href="https://www.github.com/jibijohndavid"
            />
          </li>
          <li className="my-2">
            <TextLink
              title="LinkedIn"
              href="https://www.linkedin.com/in/jibijohndavid/"
            />
          </li>
        </ul> */}
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <IconLink href="mailto:jibijohndavid@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="text-xl hover:text-indigo-400 transition-colors duration-200"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
          </IconLink>

          <IconLink href="https://www.twitter.com/jibijohndavid">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-indigo-400 transition-colors duration-200"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
            </svg>
          </IconLink>

          <IconLink href="https://www.linkedin.com/in/jibijohndavid/">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-indigo-400 transition-colors duration-200"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
            </svg>
          </IconLink>

          <IconLink href="https://www.github.com/jibijohndavid">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-indigo-400 transition-colors duration-200"
              viewBox="0 0 1792 1792"
            >
              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
            </svg>
          </IconLink>

          <IconLink href="https://codepen.io/jibijohndavid">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-indigo-400 transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z" />
            </svg>
          </IconLink>
        </div>
        <div className="text-center text-gray-600 pt-10 sm:pt-12 font-light flex items-center justify-center">
          © 2022 Jibi John David
        </div>
      </UIContainer>
    </footer>
  );
};

export default Footer;
