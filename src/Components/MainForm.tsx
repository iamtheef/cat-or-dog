import React, { FC, useState, useContext } from "react";
import { InputGroup, FormControl, Row, Form } from "react-bootstrap";
import { InputContext } from "../Context/Input";

export const MainForm: FC = () => {
  const { handleLink, handleFile, filename } = useContext(InputContext);

  return (
    <Row className="main-form">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Paste a link"
          onChange={(e) => handleLink(e)}
        />

        <Form.File
          label={filename}
          lang="en"
          custom
          onChange={(e: any) => handleFile(e)}
        />
      </InputGroup>
    </Row>
  );
};
