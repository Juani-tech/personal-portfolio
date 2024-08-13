// import rustLogo from "./assets/rust-wallpaper.png";
import rustLogo from "./assets/rust_programming_crab_sea.webp";
import reactLogo from "./assets/react-original.svg";
import typescriptLogo from "./assets/typescript-original.svg";
import prismaLogo from "./assets/prisma-original.svg";
import tailwindcssLogo from "./assets/tailwindcss-original.svg";
import nextjsLogo from "./assets/nextjs-original.svg";
import htmlLogo from "./assets/html5-original.svg";
import linuxLogo from "./assets/linux.png";
import blogLogo from "./assets/blog.jpg";
import rustIcon from "./assets/rust-original.svg";
import cLogo from "./assets/c-original.svg";
import unixLogo from "./assets/unix-original.svg";
import linuxIcon from "./assets/linux-original.svg";
import pythonIcon from "./assets/python-original.svg";
import scikitLearnIcon from "./assets/scikitlearn-original.svg";
import apacheSparkIcon from "./assets/apachespark-original.svg";
import pandasIcon from "./assets/pandas-original.svg";
import dataScienceImg from "./assets/data-science.jpg";
import mernStackImg from "./assets/mern-stack.png";
import expressIcon from "./assets/express-original.svg";
import nodejsIcon from "./assets/nodejs-original.svg";
import jestIcon from "./assets/jest-plain.svg";
import playwrightIcon from "./assets/playwright-original.svg";
import mongodbIcon from "./assets/mongodb-original.svg";
import dockerIcon from "./assets/docker-original.svg";
import reduxIcon from "./assets/redux-original.svg";
import graphqlIcon from "./assets/graphql-plain.svg";
import githubactionsIcon from "./assets/githubactions-original.svg";
import githubIcon from "./assets/github-original.svg";

// Style for converting a black svg into a white one
const invertStlye = {
  filter: "invert(100%) sepia(100%) saturate(500%) hue-rotate(180deg)",
};

const projects = [
  {
    name: "GIR - College",
    imageSrc: rustLogo,
    usedTechs: [{ icon: rustIcon, style: invertStlye }],
    githubUrl: "https://github.com/JuaniFIUBA/TP-GIR",
    shortDescription:
      "A git client/server made with rust with no external libraries. Group project for a college subject.",
    description:
      "In this group project for a college subject, we made a git client/server using rust and no external libraries. I was in charge of the server and the execution of the git protocol (in order to execute push, fetch, clone). The server is interoperable with a real git client.",
  },
  {
    name: "Blog App",
    imageSrc: blogLogo,
    githubUrl: "https://github.com/Juani-tech/nextjs-blog-app",
    usedTechs: [
      { icon: reactLogo },
      { icon: typescriptLogo },
      { icon: prismaLogo },
      { icon: tailwindcssLogo },
      { icon: nextjsLogo },
      { icon: htmlLogo },
    ],
    shortDescription:
      "A basic blog app with authentication, made to learn NextJS framework.",
    description:
      "I developed a basic blogging application that allows users to log in, sign up, create, delete (in case the user created it), and like blogs. I used SQLite for the database as it was a test app to get used to Next.js. For authentication, I used NextAuth and implemented a middleware to redirect users if they tried to access restricted pages.",
  },
  {
    name: "Operating Systems - College",
    imageSrc: linuxLogo,
    usedTechs: [{ icon: cLogo }, { icon: unixLogo }, { icon: linuxIcon }],
    githubUrl: "https://github.com/JuaniFIUBA/tps_sisop",
    shortDescription:
      "We made a shell, a scheduler and a filesystem for the college subject 'OS'",
    description:
      "In this series of projects we learned about unix processes, how to manipulate them (fork, kill, wait, etc), how to make a scheduler, and how to make a filesystem. The first two are made by using parts of JOS operating system, and the last one is made with the Fuse Filesystem. There was a lab in which we had to make the Sieve of Eratosthenes algorithm using multiple processes and pipes to communicate them",
  },
  {
    name: "Data Science - College",
    imageSrc: dataScienceImg,
    usedTechs: [
      { icon: pythonIcon },
      { icon: scikitLearnIcon },
      { icon: apacheSparkIcon },
      { icon: pandasIcon, style: invertStlye },
    ],
    githubUrl: "https://github.com/JuaniFIUBA/OrgaDeDatos-Colabs",
    shortDescription:
      "From data visualization, passing to data analysis/exploration with Pandas/Spark, NLP, finishing with machine learning",
    description: `For this subjects I did 3 individual assignnements. The first one was to make useful plots using a given dataset. The second one was about getting certain data (as a sort of requests), in order to explore the datasets given, we used half Pandas and half Apache Spark for this one. The last one was from a Kaggle competition called: "Binary Classification of VPN Proxy IP Address". The given dataset was huge, making it hard to work with, so what I did was to work with checkpoints using a batch-like approach, in which I executed a certain operation for a certain column for example, and then saved that dataset as a new checkpoint. I made this way because it was really hard to tell when the collab (we used google collab through the course) was going to finish the session due to the ram needed in order to make the operations. Finally, with all the data processed, I had to implement a baseline model, which was a perceptron, and then, the final models (2 at least), for which I used a Decision Tree and a Random Forest Tree. I also tried with LightGBM and XGBoost, obtaining really good results, but finally, those 2 models I mentioned before got better results. I have to mention that this project in particular was hard to work with, mainly because it took a very long time for the models to finish the training, with most of the time getting bad results. The same goes for hyperparameter searching.
    Link to the competition: https://www.kaggle.com/competitions/vpn-classification`,
  },
  {
    name: "FS Open",
    imageSrc: mernStackImg,
    usedTechs: [
      { icon: typescriptLogo },
      { icon: reactLogo },
      { icon: expressIcon, style: invertStlye },
      { icon: nodejsIcon },
      { icon: mongodbIcon },
      { icon: jestIcon },
      { icon: playwrightIcon },
      { icon: dockerIcon },
      { icon: reduxIcon },
      { icon: graphqlIcon },
      { icon: githubactionsIcon },
      { icon: githubIcon, style: invertStlye },
    ],
    githubUrl: "git@github.com:Juani-tech/fsopen-gral.git",
    shortDescription:
      "A git client/server made with rust with no external libraries. Group project for a college subject.",
    description:
      "In this group project for a college subject, we made a git client/server using rust and no external libraries. I was in charge of the server and the execution of the git protocol (in order to execute push, fetch, clone). The server is interoperable with a real git client.",
  },
];

export default projects;
