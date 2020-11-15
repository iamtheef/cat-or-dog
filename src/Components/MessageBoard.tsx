import React, { FC, useEffect, useContext, useState } from "react";
import { PredictionContext } from "../Context/Prediction";
import { Alert } from "react-bootstrap";

export const MessageBoard = () => {
  const { checkRequest, predict } = useContext(PredictionContext);
  const [error, setError] = useState([]);
  useEffect(() => {
    setError(checkRequest.errors[0]);
  }, [predict]);

  if (checkRequest.isOK) {
    return <div></div>;
  } else {
    return (
      <Alert variant="danger" className="message-board">
        {error}
      </Alert>
    );
  }
};
