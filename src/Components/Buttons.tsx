import React, { FC, useContext } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { PredictionContext } from "../Context/Prediction";
import { MessageBoard } from "./MessageBoard";

export const Buttons: FC = () => {
  const { predict } = useContext(PredictionContext);

  return (
    <div>
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
      <MessageBoard />
    </div>
  );
};
