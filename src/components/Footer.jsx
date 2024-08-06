import aboutImage from "../assets/img.jpg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import phoneIcon from "../assets/phone-outline.svg";
import emailIcon from "../assets/email-outline.svg";

const Footer = () => {
  return (
    <footer className="h-1/3 flex justify-around mt-10">
      <div className="w-1/2 flex flex-col justify-between">
        <h1 className="text-2xl">Contact me</h1>
        <p>
          Please get in touch if you think our work could be mutually beneficial
        </p>
        <div>
          <p>1234 Random Road</p>
          <p>Random Town, California</p>
        </div>
        <div>
          <div className="flex">
            <a href="#">
              <img
                className="w-5 h-5"
                src={phoneIcon}
                alt="github link to project"
              />
            </a>
            <p>555-5555-5555</p>
          </div>

          <div className="flex">
            <a href="#">
              <img
                className="w-5 h-5"
                src={emailIcon}
                alt="github link to project"
              />
            </a>{" "}
            <p>jperezdichiazza@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-10">
          <a href="#">
            <img className="h-10 w-10" src={githubIcon} alt="github" />
          </a>
          <a href="#">
            <img className="h-10 w-10" src={linkedinIcon} alt="linkedin" />
          </a>
        </div>
      </div>
      <img className="max-h-fit w-1/2" src={aboutImage} alt="A beach" />
    </footer>
  );
};

export default Footer;
