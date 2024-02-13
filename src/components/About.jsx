import React from "react";
import family from "../assets/about/family.png";
import video from "../assets/about/costarica.mp4";
import graduation from "../assets/about/graduation.png";
import soccer from "../assets/about/soccer.png";
import tennis from "../assets/about/tennis.png";
import hobbies from "../assets/about/hobbies.png";

const Experience = () => {
  const portfolios = [
    {
      id: 1,
      src: video,
      title: "I was born and raised in Costa Rica",
    },
    {
      id: 2,
      src: family,
      title: "Moved to Florida at 14",
    },
    {
      id: 3,
      src: graduation,
      title: "I then graduated as first-gen",
    },
    {
      id: 4,
      src: soccer,
      title: "Soccer is my favorite sport",
    },
    {
      id: 5,
      src: tennis,
      title: "Tennis is my second favorite sport",
    },
    {
      id: 6,
      src: hobbies,
      title: "Among other hobbies!",
    },
  ];

  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, date }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              {src.endsWith(".mp4") ? (
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  className="w-full h-48 object-cover rounded-md duration-200 hover:scale-105"
                />
              ) : (
                <img
                  src={src}
                  alt=""
                  className="w-full h-48 object-cover rounded-md duration-200 hover:scale-105"
                />
              )}
              <div className="flex flex-col items-center justify-center">
                <button
                  className="w-full px-6 py-3 m-4 duration-200 hover:scale-105 overflow-hidden"
                  style={{ cursor: "auto" }} // Set cursor to auto
                >
                  <span className="whitespace-nowrap">
                    {title} {date}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
