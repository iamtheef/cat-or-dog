import React, { FC } from "react";
import cube from "../assets/cube.gif";

export const Background: FC = () => {
  return (
    <div>
      <img src={cube} className="background" />
    </div>
  );
};
