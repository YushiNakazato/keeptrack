import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectsPage from './projects/ProjectsPage';
import Hello from './Hello';

function App() {
  return (
    <div className="container">
      <ProjectsPage />
      <Hello name="David" enthusiasmLevel={3} />
    </div>
  )
}

export default App;
