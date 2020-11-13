import React, { FC, useState } from "react";
import { InputGroup, FormControl, Container, Row, Form } from "react-bootstrap";

export const MainForm: FC = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("or upload an image");

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  return (
    <Container>
      <Row className="main-form">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Paste a link"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

          <Form.File
            label={filename}
            lang="en"
            custom
            onChange={handleChange}
          />
        </InputGroup>
      </Row>
    </Container>
  );
};
