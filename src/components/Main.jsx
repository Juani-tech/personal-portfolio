import { Link } from "react-router-dom";

import projectsData from "../projects-data";

const Main = () => {
  return (
    <main
      className="h-1/3 flex flex-col bg-black px-20 py-12"
      // className="h-1/3 flex flex-col bg-gradient-to-r from-indigo-800  via-sky-500 to-black px-20 py-12 "
      // className="h-1/3 flex flex-col bg-cover bg-gradient-to-r from-indigo-800  via-sky-500 to-black px-20 py-12 "
      // style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1 className="text-center text-4xl font-bold text-white">My work</h1>
      <section className="h-1/3 grid grid-cols-3 gap-10 mt-10">
        {projectsData.map((project, index) => (
          <div
            // className="bg-gradient-to-b from-blue-500 to-blue-800 text-white overflow-hidden pb-6 rounded-xl"
            className="bg-orange-500 text-white overflow-hidden pb-6 rounded-xl"
            key={index}
          >
            <img className="w-full h-4/6 " src={project.imageSrc}></img>
            <div className="py-3 px-5 overflo">
              <div className="flex justify-between">
                <h1 className="text-lg">{project.name}</h1>
                <div className="flex gap-4 items-center">
                  {/*
                  <a href={project.githubUrl} target="_blank">
                    {/* <img
                      className="w-7 h-7"
                      src={githubIcon}
                      alt="github link to project"
                    /> 
                    <svg
                      className="h-7 w-7 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </a>*/}
                  <Link to={`/project/${project.name}`}>
                    {/* <img
                      className="w-7 h-7"
                      src={appIcon}
                      alt="github link to project"
                    /> */}
                    <svg
                      className="h-6 w-6 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V4C23 2.9 22.1 2 21 2M21 20H3V6H21V20M9 8C7.9 8 7 8.9 7 10C7 11.1 6.1 12 5 12V14C6.1 14 7 14.9 7 16C7 17.1 7.9 18 9 18H11V16H9V15C9 13.9 8.1 13 7 13C8.1 13 9 12.1 9 11V10H11V8M15 8C16.1 8 17 8.9 17 10C17 11.1 17.9 12 19 12V14C17.9 14 17 14.9 17 16C17 17.1 16.1 18 15 18H13V16H15V15C15 13.9 15.9 13 17 13C15.9 13 15 12.1 15 11V10H13V8H15Z" />
                    </svg>
                  </Link>
                </div>
              </div>
              <p className="mt-5 overflow-hidden">{project.shortDescription}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Main;
