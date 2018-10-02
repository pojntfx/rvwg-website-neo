import * as React from "react";
import { Navbar as NavbarTemplate, Nav, Container } from "react-bootstrap";
import { Link } from "./Link";
import { Icon } from "./Icon";
import styled from "styled-components";
import { EasterEgg } from "./EasterEgg";

const Navbar = styled(NavbarTemplate)`
  overflow-x: auto;
  & .nav-link {
    white-space: nowrap;
  }
`;

interface IFooterItem {
  title: string;
  icon: any;
  to: string;
}

interface IFooter {
  items: IFooterItem[];
}

const Footer = (props: IFooter) => (
  <Navbar bg="light" variant="primary" className="mt-3">
    <EasterEgg />
    <Container className="px-0 px-sm-3">
      <Nav className="ml-auto mr-auto">
        {props.items.map(({ title, icon, to }, index) => (
          <Nav.Link as={Link} to={to} key={index}>
            <Icon icon={icon} />
            <span>{title}</span>
          </Nav.Link>
        ))}
      </Nav>
    </Container>
  </Navbar>
);

export { Footer };
