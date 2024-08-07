import { Routes, Route, useMatch } from "react-router-dom";
import Project from "./components/Project";
import Layout from "./components/Layout";
import projects from "./projects-data";

function App() {
  const match = useMatch("/project/:name");
  const project = match
    ? projects.find((project) => project.name === match.params.name)
    : null;

  return (
    <Routes>
      <Route
        path="/project/:name"
        element={<Project project={project} />}
      ></Route>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
