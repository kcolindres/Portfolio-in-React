import React from "react";
import nccer from "../assets/experience/nccer.png";
import colindres from "../assets/experience/remodeling.png";
import shpe from "../assets/experience/shpe.jpg";
import uf from "../assets/experience/ufcompsci.png";
import visa from "../assets/experience/visa.png";

const Experience = () => {
  const portfolios = [
    {
      id: 1,
      src: uf,
      title: "TA Intro to SWE",
      date: "Aug 2023 - Dec 2023",
      url: "https://www.linkedin.com/posts/krisna-colindres_i-am-happy-to-share-that-im-starting-a-new-activity-7110816112224735232-N4TD?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 2,
      src: visa,
      title: "SWE Intern",
      date: "Aug 2023 - Dec 2023",
      url: "https://www.linkedin.com/posts/krisna-colindres_lifeatvisa-visa-softwaredevelopment-activity-7100921058278445056-JNa5?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 3,
      src: visa,
      title: "SWE Intern",
      date: "May 2023 - Aug 2023",
      url: "https://www.linkedin.com/posts/krisna-colindres_lifeatvisa-sweintern-grateful-activity-7046591701733314560-DheM?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 4,
      src: shpe,
      title: "Facilitator",
      date: "Sep 2022 - Present",
      url: "https://www.linkedin.com/posts/deannadrako_hispanicheritagemonth-activity-7105559470037970944-zO1w?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 5,
      src: nccer,
      title: "IT Intern",
      date: "Oct 2021 - Dec 2021",
      url: "https://www.nccer.org/",
    },
    {
      id: 6,
      src: colindres,
      title: "Manager",
      date: "Jun 2019 - Present",
      url: "https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?inquirytype=EntityName&directionType=ForwardList&searchNameOrder=COLINDRESCUSTOMCARPENTRYREMODE%20L200002057870&aggregateId=flal-l20000205787-4a0d3783-1bb7-42e3-ae9c-9dd4b00b7e74&searchTerm=COLINA%20%26%20SONS%20INC&listNameOrder=COLINDRES%20P220000868490",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Professional Experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url, title, date }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="w-full h-48 object-cover rounded-md duration-200 hover:scale-105"
              />
              <div className="flex flex-col items-center justify-center">
                <button className="w-full px-4 py-2 m- duration-200 hover:scale-105 overflow-hidden">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <span className="whitespace-nowrap">
                      {title} {date}
                    </span>
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

export default Experience;
