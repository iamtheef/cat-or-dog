import React, { createContext, useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const PredictionContext = createContext<any>(undefined);

export function PredictionProvider({ children }: Props) {
  const [prediction, setPrediction] = useState(undefined);

  useEffect(() => {});

  return (
    <PredictionContext.Provider
      value={{
        prediction,
        setPrediction,
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
}
