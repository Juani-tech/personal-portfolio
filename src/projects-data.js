import rustLogo from "./assets/rust-wallpaper.png";
import rustIcon from "./assets/rust-original.svg";
import reactLogo from "./assets/react-original.svg";
import typescriptLogo from "./assets/typescript-original.svg";
import prismaLogo from "./assets/prisma-original.svg";
import tailwindcssLogo from "./assets/tailwindcss-original.svg";
import nextjsLogo from "./assets/nextjs-original.svg";
import htmlLogo from "./assets/html5-original.svg";
import blogImg from "./assets/blog.jpg";

const projects = [
  {
    name: "GIR",
    imageSrc: rustLogo,
    usedTechs: [rustIcon],
    githubUrl: "https://github.com/JuaniFIUBA/TP-GIR",
    shortDescription:
      "A git client/server made with rust with no external libraries. Group project for a college subject.",
    description:
      "In this group project for a college subject, we made a git client/server using rust and no external libraries. I was in charge of the server and the execution of the git protocol (in order to execute push, fetch, clone). The server is interoperable with a real git client.",
  },
  {
    name: "Blog App",
    imageSrc: blogImg,
    githubUrl: "https://github.com/Juani-tech/nextjs-blog-app",
    usedTechs: [
      reactLogo,
      typescriptLogo,
      prismaLogo,
      tailwindcssLogo,
      nextjsLogo,
      htmlLogo,
    ],
    shortDescription:
      "A basic blog app with authentication, made to learn NextJS framework.",
    description:
      "I developed a basic blogging application that allows users to log in, sign up, create, delete, and like blogs. I used SQLite for the database as it was a test app to get used to Next.js. For authentication, I used NextAuth and implemented middleware to redirect users if they tried to access restricted pages.",
  },
  {
    name: "GIR",
    imageSrc: rustLogo,
    usedTechs: [rustIcon],
    githubUrl: "https://github.com/JuaniFIUBA/TP-GIR",
    shortDescription:
      "A git client/server made with rust with no external libraries. Group project for a college subject.",
    description:
      "In this group project for a college subject, we made a git client/server using rust and no external libraries. I was in charge of the server and the execution of the git protocol (in order to execute push, fetch, clone). The server is interoperable with a real git client.",
  },
  {
    name: "GIR",
    imageSrc: rustLogo,
    usedTechs: [rustIcon],
    githubUrl: "https://github.com/JuaniFIUBA/TP-GIR",
    shortDescription:
      "A git client/server made with rust with no external libraries. Group project for a college subject.",
    description:
      "In this group project for a college subject, we made a git client/server using rust and no external libraries. I was in charge of the server and the execution of the git protocol (in order to execute push, fetch, clone). The server is interoperable with a real git client.",
  },
  {
    name: "GIR",
    imageSrc: rustLogo,
    usedTechs: [rustIcon],
    githubUrl: "https://github.com/JuaniFIUBA/TP-GIR",
    shortDescription:
      "A git client/server made with rust with no external libraries. Group project for a college subject.",
    description:
      "In this group project for a college subject, we made a git client/server using rust and no external libraries. I was in charge of the server and the execution of the git protocol (in order to execute push, fetch, clone). The server is interoperable with a real git client.",
  },
  {
    name: "GIR",
    imageSrc: rustLogo,
    usedTechs: [rustIcon],
    githubUrl: "https://github.com/JuaniFIUBA/TP-GIR",
    shortDescription:
      "A git client/server made with rust with no external libraries. Group project for a college subject.",
    description:
      "In this group project for a college subject, we made a git client/server using rust and no external libraries. I was in charge of the server and the execution of the git protocol (in order to execute push, fetch, clone). The server is interoperable with a real git client.",
  },
];

export default projects;
