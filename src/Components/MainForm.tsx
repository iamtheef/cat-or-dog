import React, { FC, useState } from "react";
import { InputGroup, FormControl, Container, Row, Form } from "react-bootstrap";

export const MainForm: FC = () => {
  return (
    <Container>
      <Row className="main-form">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Paste a link"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

          <Form.File label="or upload a file" lang="en" custom />
        </InputGroup>
      </Row>
    </Container>
  );
};
