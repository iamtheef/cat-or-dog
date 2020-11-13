import React from "react";
import "./App.css";
import { Background } from "./Components/Background";
import { MainForm } from "./Components/MainForm";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Background />
      <Container>
        <MainForm />
      </Container>
    </div>
  );
}

export default App;
