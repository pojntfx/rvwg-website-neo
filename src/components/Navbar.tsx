import * as React from "react";
import {
  Navbar as NavbarWrapper,
  Nav as NavTemplate,
  Container,
  Popover,
  OverlayTrigger
} from "react-bootstrap";
import { Link } from "./Link";
import styled from "styled-components";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const isPartiallyActiveBrand = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "navbar-brand active" } : null;

const NavbarBrand = styled.img`
  height: 19px;
`;

const Nav = styled(NavTemplate)`
  & .nav-link {
    white-space: nowrap;
    &.active {
      position: relative;
      &:after,
      &:before {
        bottom: -8px;
        left: 50%;
        border: solid transparent;
        content: "";
        position: absolute;
        pointer-events: none;
      }

      &:after {
        border-color: transparent;
        border-bottom-color: white;
        border-width: 13px;
        margin-left: -13px;
      }
    }
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
  location: any;
}

const Navbar = (props: INavbarProps) => (
  <NavbarWrapper bg="primary" variant="dark" sticky="top">
    <Container className="px-0 px-sm-3">
      <NavbarWrapper.Brand as={Link} to="/" getProps={isPartiallyActiveBrand}>
        <NavbarBrand src={props.logoSrc} alt={props.title} />
      </NavbarWrapper.Brand>
      <Nav className="ml-auto">
        {props.items.map(({ title, icon, description, to }, index) => (
          <OverlayTrigger
            trigger="click"
            rootClose
            placement="bottom"
            overlay={
              <Popover title={title} id="popover">
                {description}
                <br />
                <Link to={to}>
                  <Button
                    icon={faLink}
                    content={`${title} besuchen`}
                    className="mt-2"
                    size="block"
                  />
                </Link>
              </Popover>
            }
            key={index}
          >
            <NavTemplate.Link
              className={props.location.pathname === to ? "active" : undefined}
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
