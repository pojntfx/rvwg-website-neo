import * as React from "react";
import { Button as ButtonTemplate } from "react-bootstrap";
import { Icon } from "./Icon";

const Button = ({ icon, content, ...otherProps }) => (
  <ButtonTemplate variant="primary" {...otherProps}>
    <Icon icon={icon} /> {content}
  </ButtonTemplate>
);

export { Button };
