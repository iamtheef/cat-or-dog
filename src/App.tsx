import React from "react";
import "./App.css";
import { Background } from "./Components/Background";
import { MainForm } from "./Components/MainForm";
import { Container } from "react-bootstrap";
import { InputProvider } from "./Context/Input";
import { PredictionProvider } from "./Context/Prediction";
import { InputCanvas } from "./Components/InputCanvas";
import { TypingEffect } from "./Components/TypingEffect";
import { PredictButton } from "./Components/PredictButton";

function App() {
  return (
    <div className="App">
      <Background />
      <TypingEffect />
      <InputProvider>
        <PredictionProvider>
          <Container>
            <InputCanvas />
            <MainForm />
            <PredictButton />
          </Container>
        </PredictionProvider>
      </InputProvider>
    </div>
  );
}

export default App;
