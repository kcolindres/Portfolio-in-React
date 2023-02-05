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
          Hello, My name is Krisna Colindres. I am 23 years old. I was born and raised
          in Cartago, Costa Rica. My family immigrated to the United States in 2014 when
          I was 14. I'm a senior studying Computer Science at the University of Florida
          and looking for cloud computing-related or web development internships, but I'm
          open to learning about different roles since a culture fit is more important to
          me than a role.          
        </p>
        <p className="text-xl mt-20">
          Some of my hobbies include playing soccer with my church community. Building and
          learning about mechanical keyboards. Learning the science behind people's personalities
          and how we interact with each other. Playing video games with friends. Going to the gym.
          Gardening. And learning new technologies. 
                
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;