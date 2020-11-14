import React, { FC } from "react";
import { Button, Row } from "react-bootstrap";

export const PredictButton: FC = () => {
  return (
    <Row>
      <Button variant="light" className="predict-button">
        Predict
      </Button>
    </Row>
  );
};
