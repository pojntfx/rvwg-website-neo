import * as React from "react";
import {
  Navbar as NavbarTemplate,
  Nav as NavTemplate,
  Container,
  Popover,
  OverlayTrigger
} from "react-bootstrap";
import { Link } from "./Link";
import styled from "styled-components";
import { Icon } from "./Icon";

const NavbarWrapper = styled(NavbarTemplate)`
  /* overflow-x: auto; */
`;

const isPartiallyActiveBrand = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "navbar-brand active" } : null;

const isPartiallyActiveLink = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "nav-link active" } : null;

const NavbarBrand = styled.img`
  height: 19px;
`;

const Nav = styled(NavTemplate)`
  & .nav-link {
    white-space: nowrap;
  }
`;

interface INavbarItem {
  title: string;
  to: string;
  icon: any;
  description: string;
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
        {props.items.map(({ title, icon, description, to }, index) => (
          <OverlayTrigger
            trigger="hover"
            placement="bottom"
            overlay={<Popover title={title}>{description}</Popover>}
          >
            <NavTemplate.Link
              as={Link}
              to={to}
              getProps={isPartiallyActiveLink}
              key={index}
            >
              <Icon icon={icon} />
              <span className="d-none d-md-inline">{title}</span>
            </NavTemplate.Link>
          </OverlayTrigger>
        ))}
      </Nav>
    </Container>
  </NavbarWrapper>
);

export { Navbar };
