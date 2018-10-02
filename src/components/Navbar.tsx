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

const NavbarBrand = styled.img`
  height: 24px;
`;

interface INavbarItem {
  title: string;
  to: string;
}

interface INavbarProps {
  logoSrc: string;
  title: string;
  items: INavbarItem[];
}

const Navbar = (props: INavbarProps) => (
  <NavbarWrapper bg="primary" variant="dark" sticky="top">
    <Container className="px-0 px-sm-3">
      <NavbarTemplate.Brand as={Link} to="/" getProps={isPartiallyActiveBrand}>
        <NavbarBrand src={props.logoSrc} alt={props.title} />
      </NavbarTemplate.Brand>
      <Nav className="ml-auto">
        {props.items.map(({ title, to }, index) => (
          <Nav.Link
            as={Link}
            to={to}
            getProps={isPartiallyActiveLink}
            key={index}
          >
            {title}
          </Nav.Link>
        ))}
      </Nav>
    </Container>
  </NavbarWrapper>
);

export { Navbar };
