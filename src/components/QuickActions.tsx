import * as React from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import {
  faCloud,
  faUtensils,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

interface IQuickActions {
  leftButton: {
    content: string;
    icon: any;
  };
  searchBar: {
    placeholder: string;
  };
  searchButton: {
    content: string;
    icon: any;
  };
  rightButton: {
    content: string;
    icon: any;
  };
}

const QuickActions = (props: IQuickActions) => (
  <Row {...props}>
    <Col className="mb-3 mb-lg-0" lg={true}>
      <Button {...props.leftButton} size="block" />
    </Col>
    <Col lg={true}>
      <InputGroup className="mb-3">
        <FormControl {...props.searchBar} />
        <InputGroup.Append>
          <Button {...props.searchButton} size="block" />
        </InputGroup.Append>
      </InputGroup>
    </Col>
    <Col lg={true}>
      <Button {...props.rightButton} size="block" />
    </Col>
  </Row>
);

export { QuickActions };
