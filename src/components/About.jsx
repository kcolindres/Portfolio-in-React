import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello, I am Krisna Colindres, a 23-year-old computer science student
          at the University of Florida. Born and raised in Cartago, Costa Rica,
          I immigrated to the United States with my family in 2014 at the age of
          14. As I near graduation, I am eager to start my career in the tech
          industry and am currently seeking internships in cloud computing or
          web development. However, I am open to exploring different roles and
          industries as I believe that a good cultural fit is just as important
          as the role itself
        </p>
        <p className="text-xl mt-20">
          Outside of my studies, I have a range of hobbies and interests. I
          enjoy playing soccer with my church community, building and learning
          about mechanical keyboards, and exploring the science of personalities
          and human interaction. I also love playing video games with friends,
          hitting the gym, gardening, and keeping up with new technologies.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
