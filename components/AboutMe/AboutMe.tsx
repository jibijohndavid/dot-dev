import Image from "next/image";
import Link from "next/link";
import UIContainer from "../Layout/UIContainer";

const AboutMe = () => {
  return (
    <section>
      <UIContainer>
        <div className="container py-20 mx-auto">
          <div className="items-center lg:flex">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-indigo-400">Who I am</h2>
              <p className="mt-4 text-gray-500 lg:max-w-xl">
                Hi I am Jibi John David, a passionate&nbsp;
                <span className="font-bold text-indigo-400">
                  Software Engineer&nbsp;
                </span>
                having 5+ years of industry experience in analysis, design and
                development of Web and Mobile based solutions.
                <p className="mt-2">
                  Motivated by vision and inspiration, focusing on ideas and
                  concepts and turning them into digital experiences.
                </p>
                <p className="mt-2">
                  Currently I am working with&nbsp;
                  <Link href="https://www.pitsolutions.ch/en/" replace>
                    <a target="_blank" className="font-bold underline">
                      PIT Solutions
                    </a>
                  </Link>
                  , leading a team of talented engineers and mentoring them to
                  their full potential while working closely with the
                  architecture team for the design and delivery of the project
                  features.
                </p>
              </p>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/3">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-lg">
                  <Image
                    className="object-cover object-center w-full h-64 rounded-md shadow"
                    src="https://jibi.dev/images/me.work.png"
                    alt="Image of Jibi John David thinking"
                    height={300}
                    width={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </UIContainer>
    </section>
  );
};

export default AboutMe;
