import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import cmasmas from "../assets/cmasmas.png";
import java from "../assets/java.png";
import Python from "../assets/Python.png";
import sql from "../assets/sql.png";
import firebase from "../assets/firebase.png";
import Git from "../assets/Git.png";
import spicework from "../assets/spicework.png";
import linux from "../assets/linux.png";
import assembly from "../assets/assembly.png";
import Matlab from "../assets/Matlab.png";
import R from "../assets/R.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: cmasmas,
      title: "c++",
      style: "shadow-blue-400 bg-darkblue",
    },
    {
      id: 9,
      src: java,
      title: "Java",
      style: "shadow-red-400 ",
    },
    {
      id: 10,
      src: Python,
      title: "Python",
      style: "shadow-yellow-300",
    },
    {
      id: 11,
      src: sql,
      title: "SQL",
      style: "shadow-blue-200",
    },
    {
      id: 12,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-200",
    },
    {
      id: 13,
      src: Git,
      title: "Git",
      style: "shadow-orange-200",
    },
    {
      id: 14,
      src: spicework,
      title: "spiceworks",
      style: "shadow-orange-500",
    },
    {
      id: 15,
      src: linux,
      title: "Linux",
      style: "shadow-gray-500",
    },
    {
      id: 16,
      src: assembly,
      title: "Assembly",
      style: "shadow-green-500",
    },
    {
      id: 17,
      src: Matlab,
      title: "matlab",
      style: "shadow-orange-200",
    },
    {
      id: 18,
      src: R,
      title: "R",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
