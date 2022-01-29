import Image from "next/image";

type BlogTagProps = {
  title: string;
};

const BlogTag = ({ title }: BlogTagProps) => (
  <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-indigo-100 rounded-2xl">
    {`#${title}`}
  </div>
);

const BlogCard = () => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90  cursor-pointer m-auto">
      <a href="#" className="w-full block h-full">
        <Image
          src="/images/blog-placeholder.jpg"
          alt="blog photo"
          className="object-cover"
          height={200}
          width={400}
        ></Image>
        <div className="bg-white w-full p-4">
          <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
            I started writing blogs
          </p>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md max-h-32 overflow-hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut rem
            aliquam iste deleniti sapiente aperiam, suscipit sequi recusandae
            earum incidunt nulla reiciendis ullam dolorem commodi neque alias
            quisquam? Ad, dolorum. A aperiam veritatis cumque culpa. Adipisci
            tenetur at ea fugiat et aperiam rem, minus, quos debitis error
            dolores beatae reprehenderit possimus consequatur.
          </p>
          <div className="flex flex-wrap justify-starts items-center mt-4">
            <BlogTag title="javascript" />
            <BlogTag title="react" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
