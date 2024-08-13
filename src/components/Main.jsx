import { Link } from "react-router-dom";

import projectsData from "../projects-data";

const Main = () => {
  return (
    <main className="min-h-1/3 flex flex-col bg-black px-20 py-12">
      <h1 className="text-5xl text-center text-white ">My work</h1>
      <section className="xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 flex flex-col gap-10 mt-10">
        {projectsData.map((project, index) => (
          <Link
            className="block bg-slate-900 text-gray-300 hover:text-white overflow-hidden pb-6 rounded-xl transition-all hover:scale-110 "
            to={`/project/${project.name}`}
            key={index}
          >
            <img className="w-full h-4/6" src={project.imageSrc}></img>
            <div className="py-3 px-5">
              <div className="flex justify-between">
                <h1 className="text-xl">{project.name}</h1>
              </div>
              <p className="mt-5 overflow-hidden line-clamp-2">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Main;
