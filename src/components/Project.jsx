/* eslint-disable react/prop-types */
// import htmlTag from "../assets/html-tag.jpg";
import genericCode from "../assets/generic-code.png";
import neonBackground from "../assets/neon2.jpg";
const Project = ({ project }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-mono text-white">
      <header className="flex flex-1 justify-center ">
        <img
          className="h-full w-full brightness-50 fixed top-0 left-0 z-0"
          src={neonBackground}
          alt="Asd"
        ></img>
        <h1 className="text-5xl text-white text-center mt-20 relative animate-pulse">
          {project.name}
        </h1>
      </header>
      <main className="flex-1 h-2/3 flex flex-col md:flex-row gap-10  bg-slate-900 m-10 rounded-3xl justify-between overflow-hidden relative">
        <div className="flex flex-col gap-10 md:w-2/3 px-6 pt-10 md:py-10 md:p-10">
          <h1 className="text-3xl text-center">Technologies used</h1>
          <div className="grid grid-cols-3 gap-4 px-6 md:flex md:gap-10 md:p-3 max-w-max rounded-2xl md:flex-wrap">
            {project.usedTechs.map((tech, idx) => {
              return (
                <img
                  className="h-full w-full md:h-10 md:w-10"
                  src={tech.icon}
                  key={idx}
                  style={{ ...tech.style }}
                />
              );
            })}
          </div>
          <p className="break-words text-xl relative mt-6 md:mt-0">
            {project.description}
          </p>
          <div className="flex justify-center">
            <a className="" href={project.githubUrl} target="_blank">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative text-slate-400 text-xl font-semibold py-4 px-10 rounded-xl bg-black group-hover:text-white transition duration-200">
                  See more
                </button>
              </div>
            </a>
          </div>
        </div>
        <img
          className="max-h-fit w-full md:w-1/3 brightness-50"
          src={genericCode}
          alt="Asd"
        ></img>
      </main>
    </div>
  );
};

export default Project;
