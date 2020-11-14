import React, { createContext, useState, useContext } from "react";
import { InputContext } from "../Context/Input";
import axios from "axios";

type Props = {
  children: React.ReactNode;
};

interface IPrediction {
  success: boolean;
  message: string;
}

export const PredictionContext = createContext<any>(undefined);

export function PredictionProvider({ children }: Props) {
  const [prediction, setPrediction] = useState(undefined);
  const { file, isLink, input } = useContext(InputContext);

  const predict = () => {
    console.log(file, isLink, input);
  };

  return (
    <PredictionContext.Provider
      value={{
        prediction,
        setPrediction,
        predict,
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
}
