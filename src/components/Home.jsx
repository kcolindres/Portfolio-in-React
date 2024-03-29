import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hello, I'm a Software Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I earned an AA in Engineering from{" "}
            <a
              href="https://www.sfcollege.edu/number-one/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white"
            >
              Santa Fe College
            </a>{" "}
            and a BS in Computer Science from the{" "}
            <a
              href="https://news.warrington.ufl.edu/rankings/university-of-florida-again-ranked-no-5-among-public-universities-by-us-news-world-report/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-orange-400"
            >
              University of Florida
            </a>{" "}
            in December 2023.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-4/5 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
