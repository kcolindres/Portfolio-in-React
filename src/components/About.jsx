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
          My name is Krisna Colindres, a 24-year-old software engineer. I was
          born and raised in Costa Rica to parents from Honduras and Peru. I'm
          the eldest brother of two. In 2014, when I was 14 years old, my family
          immigrated to Florida where I found my second home and amazing
          friends.
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
