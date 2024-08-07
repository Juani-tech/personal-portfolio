/* eslint-disable react/prop-types */
import htmlTag from "../assets/html-tag.jpg";
const Project = ({ project }) => {
  // const style = {
  //   // backgroundImage: "url(/src/assets/rust_programming_crab_sea.webp)",
  //   backgroundImage: "url(/src/assets/html-tag.jpg)",
  // };
  return (
    <div className="min-h-screen flex flex-col font-mono">
      <header className="flex flex-1 justify-center ">
        <img
          className="h-1/3 w-full object-cover fixed top-0 left-0 z-0"
          src={htmlTag}
          alt="Asd"
        ></img>
        <h1 className="text-3xl text-white text-center mt-2 relative animate-pulse">
          {project.name}
        </h1>
      </header>
      <main className="flex-1 p-10 h-2/3 flex flex-col gap-10 z-10 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl">{project.name}</h1>
          <div className="flex gap-10 ">
            {project.usedTechs.map((tech, idx) => (
              <img className="h-10 w-10" src={tech} key={idx} />
            ))}
          </div>
        </div>
        <p className="text-lg ">{project.description}</p>
      </main>
    </div>
  );
};

export default Project;
