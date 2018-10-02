import * as React from "react";
import { Navbar as NavbarTemplate, Nav, Container } from "react-bootstrap";
import { Link } from "./Link";
import styled from "styled-components";

const NavbarWrapper = styled(NavbarTemplate)`
  overflow-x: auto;
`;

const isPartiallyActiveBrand = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "navbar-brand active" } : null;

const isPartiallyActiveLink = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "nav-link active" } : null;

interface INavbarItem {
  title: string;
  to: string;
}

interface INavbarProps {
  title: string;
  items: INavbarItem[];
}

const Navbar = (props: INavbarProps) => (
  <NavbarWrapper bg="warning" variant="light" sticky="top">
    <Container>
      <NavbarTemplate.Brand as={Link} to="/" getProps={isPartiallyActiveBrand}>
        {props.title}
      </NavbarTemplate.Brand>
      <Nav className="ml-auto">
        {props.items.map(({ title, to }) => (
          <Nav.Link as={Link} to={to} getProps={isPartiallyActiveLink}>
            {title}
          </Nav.Link>
        ))}
      </Nav>
    </Container>
  </NavbarWrapper>
);

export { Navbar };
