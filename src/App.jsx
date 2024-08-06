import { Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
