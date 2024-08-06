import aboutImage from "../assets/img.jpg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

const Header = () => {
  return (
    <header className="h-1/3">
      {/* card */}
      <div className="bg-white flex gap-3 h-full shadow-2xl">
        <img className="max-h-fit w-1/2" src={aboutImage} alt="A beach" />
        <div className="flex flex-col justify-around p-3 text-start">
          <h1 className="text-4xl">About me</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
            atque accusantium. Cum magni at consectetur blanditiis aut
            voluptatibus praesentium distinctio inventore harum consequatur,
            placeat unde dolorem officiis et, qui sequi!
          </p>
          <div className="flex justify-end gap-2">
            <a href="#">
              <img className="w-5 h-5" src={githubIcon} alt="github" />
            </a>
            <a href="#">
              <img className="w-5 h-5" src={linkedinIcon} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
