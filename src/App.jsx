import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="flex flex-col px-20 py-12  gap-8 min-h-full">
      <Header />
      <Main />
      <Footer />
      {/* <header className="h-1/3">
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
      </header> */}
      {/* <main className="h-1/3 flex flex-col ">
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
                    <a href="#">
                      <img
                        className="w-5 h-5"
                        src={githubIcon}
                        alt="github link to project"
                      />
                    </a>
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
      </main> */}
      {/* <footer className="h-1/3 flex justify-around mt-10">
        <div className="w-1/2 flex flex-col justify-between">
          <h1 className="text-2xl">Contact me</h1>
          <p>
            Please get in touch if you think our work could be mutually
            beneficial
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
      </footer> */}
    </div>
  );
}

export default App;
