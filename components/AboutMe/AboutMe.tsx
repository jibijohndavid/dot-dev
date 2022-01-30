import Image from "next/image";
import Link from "next/link";
import UIContainer from "../Layout/UIContainer";

const skills = [
  "React",
  "React Native",
  "NextJs",
  "Electron",
  "Typescript",
  "Node",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Azure",
];

const Tag = ({ title }: { title: string }) => (
  <span className="mr-4 mb-4 px-2 py-1 text-sm rounded text-gray-200 bg-purple-900 font-medium">
    {title}
  </span>
);

const AboutMe = () => {
  return (
    <section>
      <UIContainer>
        <div className="container my-10 md:my-24 mx-auto">
          <div className="items-center lg:flex">
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-purple-500 md:text-3xl">
                About me
              </h2>
              <div className="my-4 text-base text-gray-400 lg:max-w-2xl md:text-lg">
                My name is <strong>Jibi John David</strong>. I am a Software
                Engineer having 5+ years of industry experience in analysis,
                design and development of Web and Mobile based solutions.
                <p className="mt-2">
                  I am motivated by vision and inspiration. I focus on ideas and
                  concepts. Having said that I find joy in turning them into
                  digital experiences.
                </p>
                <p className="mt-2">
                  Presently I am working with&nbsp;
                  <Link href="https://www.pitsolutions.ch/en/" replace>
                    <a target="_blank" className="font-bold underline">
                      PIT Solutions
                    </a>
                  </Link>
                  , leading a team of talented engineers and also mentoring them
                  to their full potential while working closely with other
                  stakeholders for the design and delivery of the projects.
                </p>
              </div>

              <div className="mt-10 lg:max-w-xl flex flex-wrap">
                {skills.map((skill) => (
                  <Tag key={skill} title={skill} />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/3">
              <div className="flex items-center lg:justify-end">
                <div className="max-w-lg">
                  <Image
                    className="object-cover object-center w-full h-64 rounded-md shadow"
                    src="/images/me.png"
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
