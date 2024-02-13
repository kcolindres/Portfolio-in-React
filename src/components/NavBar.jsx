import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
import { animateScroll as scrollTo } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      text: "Home",
    },
    {
      id: 2,
      link: "about",
      text: "About",
    },
    {
      id: 3,
      link: "skills",
      text: "Skills",
    },
    {
      id: 4,
      link: "experience",
      text: "Experience",
    },
    {
      id: 5,
      link: "portfolio",
      text: "Portfolio",
    },
    {
      id: 6,
      link: "involvement",
      text: "Involvement",
    },
    {
      id: 7,
      link: "contact",
      text: "Contact",
    },
  ];

  const scrollToTop = () => {
    scrollTo.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <span
          className="text-5xl font-signature ml-2 cursor-pointer"
          onClick={scrollToTop}
        >
          Krisna Colindres
        </span>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, text }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {text}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              onClick={() => setNav(!nav)}
            >
              <Link to={link} smooth duration={500}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
