import React from "react";
import { Background } from "./Components/Background";
import { TypingEffect } from "./Components/TypingEffect";
import { MainRoom } from "./Components/MainRoom";
import { Info } from "./Components/Info";
import { Egg } from "./Components/Egg";
import { Switch, HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Background />
      <TypingEffect />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MainRoom} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/easter" component={Egg} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
