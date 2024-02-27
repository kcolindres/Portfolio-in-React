import React from "react";
import avlTree from "../assets/portfolio/avlTree.jpg";
import mine from "../assets/portfolio/mine.jpg";
import page from "../assets/portfolio/page.jpg";
import pac from "../assets/portfolio/pac.jpg";
import port from "../assets/portfolio/port.jpg";
import movie from "../assets/portfolio/movie.jpg";
import cache from "../assets/portfolio/cache.png";
import me from "../assets/portfolio/me.png";
import plc from "../assets/portfolio/plc.png";
import gator from "../assets/portfolio/gator.png";
import file from "../assets/portfolio/file.png";
import memory from "../assets/portfolio/memory.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: avlTree,
      title: "AVL Tree",
      url: "https://github.com/kcolindres/AVL-tree",
    },
    {
      id: 2,
      src: mine,
      title: "MinewSweeper",
      url: "https://github.com/kcolindres/MineSweeper",
    },
    {
      id: 3,
      src: movie,
      title: "Movie Finder",
      url: "https://github.com/kcolindres/movierecommender",
    },
    {
      id: 4,
      src: page,
      title: "Algorithm",
      url: "https://github.com/kcolindres/PageRankAlgorithmn",
    },
    {
      id: 5,
      src: pac,
      title: "Pac-Man",
      url: "https://github.com/kcolindres/Pacman",
    },
    {
      id: 6,
      src: port,
      title: "My Portfolio",
      url: "https://github.com/kcolindres/Portfolio-in-React/tree/main/src",
    },
    {
      id: 7,
      src: cache,
      title: "Simulator",
      url: "https://github.com/kcolindres/Cache-SImulator",
    },
    {
      id: 8,
      src: me,
      title: "Mental Health",
      url: "https://github.com/kcolindres/ME",
    },
    {
      id: 9,
      src: plc,
      title: "Compiler",
      url: "https://github.com/kcolindres/codegeneration",
    },
    {
      id: 10,
      src: gator,
      title: "Social Media",
      url: "https://github.com/Byte-Size-Chefs/NewGatorBites",
    },
    {
      id: 11,
      src: file,
      title: "File System",
      url: "https://www.youtube.com/watch?v=7-6M2Vq7aSE&ab_channel=KrishnaColindres",
    },
    {
      id: 12,
      src: memory,
      title: "Memory",
      url: "https://www.youtube.com/watch?v=lh7TFpl-cNY&ab_channel=KrisnaColindres",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, url, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <div className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {title}
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
