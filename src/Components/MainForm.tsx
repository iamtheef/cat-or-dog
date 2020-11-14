import React, { FC, useState, useContext } from "react";
import { InputGroup, FormControl, Container, Row, Form } from "react-bootstrap";
import { InputContext } from "../Context/Input";

export const MainForm: FC = () => {
  const { input, setInput } = useContext(InputContext);
  const [filename, setFilename] = useState("or upload an image");

  const handleChange = (e: any) => {
    setInput(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  return (
    <Row className="main-form">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Paste a link"
          aria-label="link"
          aria-describedby="basic-addon2"
          onChange={(e) => setInput(e.target.value)}
        />

        <Form.File label={filename} lang="en" custom onChange={handleChange} />
      </InputGroup>
    </Row>
  );
};
