import React, { createContext, useState, useContext } from "react";
import { InputContext } from "../Context/Input";
import { ValidateRequest } from "../Utils/ValidateRequest";
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
  let checkRequest = ValidateRequest({ file, isLink, input });

  const predict = () => {
    checkRequest = ValidateRequest({ file, isLink, input });
  };

  return (
    <PredictionContext.Provider
      value={{
        prediction,
        setPrediction,
        predict,
        checkRequest,
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
}
