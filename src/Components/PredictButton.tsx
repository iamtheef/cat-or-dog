import React, { FC, useContext } from "react";
import { Button, Row } from "react-bootstrap";
import { PredictionContext } from "../Context/Prediction";

export const PredictButton: FC = () => {
  const { predict } = useContext(PredictionContext);
  return (
    <Row>
      <Button
        variant="light"
        className="predict-button"
        onClick={(e) => {
          predict();
        }}
      >
        Predict
      </Button>
    </Row>
  );
};
