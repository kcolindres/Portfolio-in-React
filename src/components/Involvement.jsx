import React from "react";
import santafe from "../assets/involvement/sf.jpg";
import awards from "../assets/involvement/awards.png";
import mentor from "../assets/involvement/mentor.png";

const Involvement = () => {
  const portfolios = [
    {
      id: 1,
      src: mentor,
      title: "Mentor of 5 students",
      url: "https://www.instagram.com/mentorshpeuf/",
    },
    {
      id: 2,
      src: santafe,
      title: "Vice President at SF engineering club",
      url: "https://www.instagram.com/sfengineeringclub/",
    },
    {
      id: 3,
      src: awards,
      title: "6 Merit STEM scholarships",
      url: "https://greatmindsinstem.org/wp-content/uploads/2022/09/2022-Press-Release-2022-GMiS-STEM-Scholars-1.pdf",
    },
  ];

  return (
    <div
      name="involvement"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            School involvement, Leadership, and Awards
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, url, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-full h-48 object-cover rounded-md duration-200 hover:scale-105" // Use object-cover
                style={{ objectFit: "cover", width: "100%", height: "100%" }} // Add inline style for object-fit
              />
              <div className="flex flex-col items-center justify-center px-4 py-2">
                {" "}
                {/* Add padding to create space */}
                <button className="w-full px-4 py-2 m-2 duration-200 hover:scale-105 overflow-hidden">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <span className="whitespace-nowrap">{title}</span>
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Involvement;
