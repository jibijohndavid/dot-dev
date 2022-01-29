import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20 bg-gray-200">
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
        30 Jan 2022
      </p>
      <Link
        href="#"
        aria-label="Read article: Hello Internet: So I started writing."
      >
        <a
          className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-indigo-500"
          title="Hello Internet: So I started writing."
        >
          Hello Internet: So I started writing.
        </a>
      </Link>
      <p className="max-w-xs mx-auto mb-2 text-gray-700">
        Yes I know, I&apos;m late. But hey &ldquo;It&apos;s never too late to be
        what you might have been.&rdquo;
      </p>
      <Link href="#" aria-label="Read article">
        <a className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-600 hover:text-indigo-400">
          Continue reading
        </a>
      </Link>
    </div>
  );
};

export default BlogCard;
