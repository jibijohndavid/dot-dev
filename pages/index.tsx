/* eslint-disable @next/next/no-html-link-for-pages */
import AboutMe from "../components/AboutMe";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UIContainer from "../components/Layout/UIContainer";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Header title="Welcome to my Digital Home, Great seeing you around" />
      <AboutMe />
    </>
  );
}
