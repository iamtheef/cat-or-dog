import React, { FC, useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";

export const TypingEffect: FC = () => {
  const [text, setText] = useState<string>("");
  let txt =
    "Hi human. It's not the time to take over yet...but it will be soon. For now I can only recognise cats and dogs, so you don't have to be afraid, for now.";

  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const talk_Machine___talk = async () => {
    for (let i = 0; i < txt.length; i++) {
      setText((prevText) => (prevText += txt.charAt(i)));
      if (txt.charAt(i) === ".") await sleep(520);
      if (txt.charAt(i) === ",") await sleep(300);
      await sleep(70);
    }
  };

  useEffect(() => {
    talk_Machine___talk();

    // eslint-disable-next-line
  }, []);
  return (
    <Navbar expand="lg" className="monolog">
      <p className="text">{text}</p>
    </Navbar>
  );
};
