import React, { useContext, FC, useEffect } from "react";
import { PredictionContext } from "../Context/Prediction";
import { Alert, Spinner, Col } from "react-bootstrap";

export const MessageBoard: FC = () => {
  const { error, prediction, isLoading } = useContext(PredictionContext);

  if (error.length > 0) {
    return (
      <Alert variant="danger" className="message-board">
        {error}
      </Alert>
    );
  } else if (isLoading) {
    return (
      <Col>
        <Spinner animation="border" variant="light" className="spinner" />
      </Col>
    );
  } else if (prediction.success) {
    return (
      <Alert variant="success" className="message-board">
        {prediction.message === "1.0" ? "It's a dog!" : "It's a cat!"}
      </Alert>
    );
  } else {
    return <div></div>;
  }
};
