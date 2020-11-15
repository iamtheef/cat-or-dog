import React, { FC, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { InputContext } from "../Context/Input";

export const InputCanvas: FC = () => {
  const { input } = useContext(InputContext);

  return (
    <Row>
      <Col></Col>
      <Col>
        <img src={input} alt="" id="input-canvas" />
      </Col>
    </Row>
  );
};
