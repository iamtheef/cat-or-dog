import React, { FC, useContext } from "react";
import { Button, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { PredictionContext } from "../Context/Prediction";
import { InputContext } from "../Context/Input";

export const Buttons: FC = () => {
  const { isLink } = useContext(InputContext);
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

        <ToggleButtonGroup
          type="checkbox"
          defaultValue={[0]}
          className="toggle"
        >
          <ToggleButton value={0} checked={true}>
            Link
          </ToggleButton>
          <ToggleButton value={1} checked={false}>
            File
          </ToggleButton>
        </ToggleButtonGroup>
      </Row>
    </div>
  );
};
