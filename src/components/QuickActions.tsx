import * as React from "react";
import { Row, Col, InputGroup, FormControl, Card } from "react-bootstrap";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { Icon } from "./Icon";

interface IQuickActions {
  title: string;
  leftButton: {
    content: string;
    href: string;
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
    href: string;
    icon: any;
  };
}

const QuickActions = (props: IQuickActions) => (
  <Card body>
    <Card.Title>
      <Icon icon={faCompass} />
      {props.title}
    </Card.Title>
    <Row>
      <Col className="mb-3 mb-lg-0" lg={true}>
        <Button {...props.leftButton} size="block" as="a" />
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
        <Button {...props.rightButton} size="block" as="a" />
      </Col>
    </Row>
  </Card>
);

export { QuickActions };
