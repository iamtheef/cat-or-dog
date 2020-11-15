import React, { FC, useContext } from "react";
import {
  InputGroup,
  FormControl,
  Row,
  Form,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { InputContext } from "../Context/Input";

export const MainForm: FC = () => {
  const { handleLink, handleFile, filename, isLink, setIsLink } = useContext(
    InputContext
  );

  return (
    <div>
      <Row className="main-form">
        <InputGroup className="mb-3">
          <DropdownButton
            drop="up"
            as={InputGroup.Prepend}
            title={isLink ? "Link" : "File"}
          >
            <Dropdown.Item href="#" onClick={() => setIsLink(true)}>
              Link
            </Dropdown.Item>
            <Dropdown.Item href="#" onClick={() => setIsLink(false)}>
              File
            </Dropdown.Item>
          </DropdownButton>

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
    </div>
  );
};
