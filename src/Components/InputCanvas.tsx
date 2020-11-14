import React, { FC, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { InputContext } from "../Context/Input";

export const InputCanvas: FC = () => {
  const { input, setInput } = useContext(InputContext);

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <img src={input} alt="" id="input-canvas" />
        </Col>
      </Row>
    </Container>
  );
};
