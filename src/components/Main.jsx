import githubIcon from "../assets/github.svg";
import appIcon from "../assets/application-braces-outline.svg";
import { Link } from "react-router-dom";

import projectsData from "../projects-data";

const Main = () => {
  return (
    <main className="h-1/3 flex flex-col">
      <h1 className="text-2xl">My work</h1>
      <section className="h-1/3 grid grid-cols-3 gap-10 mt-4">
        {projectsData.map((project, index) => (
          <div
            className="bg-gray-300 shadow-2xl overflow-hidden pb-6"
            key={index}
          >
            <img className="w-full h-4/6 " src={project.imageSrc}></img>
            <div className="py-3 px-5 overflo">
              <div className="flex justify-between">
                <h1 className="text-lg">{project.name}</h1>
                <div className="flex gap-2 items-center">
                  <a href={project.githubUrl} target="_blank">
                    <img
                      className="w-5 h-5"
                      src={githubIcon}
                      alt="github link to project"
                    />
                  </a>
                  <Link to={`/project/${project.name}`}>
                    <img
                      className="w-5 h-5"
                      src={appIcon}
                      alt="github link to project"
                    />
                  </Link>
                </div>
              </div>
              <p className="overflow-hidden">{project.shortDescription}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Main;
