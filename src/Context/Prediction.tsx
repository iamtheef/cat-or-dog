import React, { createContext, useState, useContext } from "react";
import { InputContext } from "../Context/Input";
import { ValidateRequest, IRequest } from "../Utils/ValidateRequest";
import axios from "axios";

type Props = {
  children: React.ReactNode;
};

type IPrediction = {
  success: boolean;
  message: string | undefined;
};

export const PredictionContext = createContext<any>(undefined);

export function PredictionProvider({ children }: Props) {
  const [prediction, setPrediction] = useState<IPrediction>({
    success: false,
    message: undefined,
  });
  const { file, isLink, input } = useContext(InputContext);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const predict = async () => {
    let req: IRequest = { file, isLink, input };
    let checkRequest = ValidateRequest(req);

    if (checkRequest.isOK) {
      setIsLoading(true);
      axios
        .post("http://localhost:4000/predict/", { file, isLink, input })
        .then((res) => {
          setIsLoading(false);
          setPrediction(res.data);
        })
        .catch((e) => {
          setIsLoading(false);
          setError(e.message);
        });
    } else {
      setError(checkRequest.errors[0]);
    }
  };

  return (
    <PredictionContext.Provider
      value={{
        prediction,
        setPrediction,
        predict,
        error,
        setError,
        isLoading,
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
}
