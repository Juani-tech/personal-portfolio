import aboutImage from "../assets/img.jpg";
import githubIcon from "../assets/github.svg";
import appIcon from "../assets/application-braces-outline.svg";
import { Link } from "react-router-dom";

const imgs = [
  aboutImage,
  aboutImage,
  aboutImage,
  aboutImage,
  aboutImage,
  aboutImage,
];

const Main = () => {
  return (
    <main className="h-1/3 flex flex-col ">
      <h1 className="text-2xl">My work</h1>
      <section className="h-1/3 grid grid-cols-3 gap-10 mt-4">
        {imgs.map((imgName, index) => (
          <div className="bg-gray-300 shadow-2xl overflow-hidden" key={index}>
            <img className="w-full h-4/6 " src={imgName}></img>
            <div className="py-3 px-5 overflo">
              <div className="flex justify-between">
                <h1 className="text-lg">Project name</h1>
                <div className="flex gap-2 items-center">
                  <a href="#">
                    <img
                      className="w-5 h-5"
                      src={githubIcon}
                      alt="github link to project"
                    />
                  </a>
                  <Link to="/project">
                    <img
                      className="w-5 h-5"
                      src={appIcon}
                      alt="github link to project"
                    />
                  </Link>
                </div>
              </div>
              <p className="overflow-hidden">
                Short description of the project. Just a couple of sentences
                will do.
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Main;
