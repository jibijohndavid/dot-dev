import Image from "next/image";
import Link from "next/link";
import UIContainer from "../Layout/UIContainer";

const skills = [
  "React",
  "React Native",
  "NextJS",
  "Typescript",
  "NodeJS",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Azure",
];

const Tag = ({ title }: { title: string }) => (
  <span className="mr-4 mb-4 px-2 py-1 text-base rounded text-white  bg-purple-600 font-medium opacity-70">
    {title}
  </span>
);

const AboutMe = () => {
  return (
    <section>
      <UIContainer>
        <div className="container my-20 mx-auto">
          <div className="items-center lg:flex">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-indigo-400">About me</h2>
              <div className="my-4 text-base text-gray-500 lg:max-w-2xl">
                My name is <strong>Jibi John David</strong>. I am a
                passionate&nbsp;
                <strong className="font-bold text-indigo-400">
                  Software Engineer&nbsp;
                </strong>
                having 5+ years of industry experience in analysis, design and
                development of Web and Mobile based solutions.
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

              <div className="mt-8 lg:max-w-xl flex flex-wrap">
                {skills.map((skill) => (
                  <Tag key={skill} title={skill} />
                ))}
              </div>
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
