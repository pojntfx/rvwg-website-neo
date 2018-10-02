import * as React from "react";
import "../scss/main.scss";
import { Container } from "react-bootstrap";
import { Navbar } from "../components/Navbar";
import {
  faHome,
  faInfo,
  faUsers,
  faStore,
  faSun
} from "@fortawesome/free-solid-svg-icons";

const DefaultLayout = ({ children }) => (
  <>
    <Navbar
      logoSrc="/img/logo.png"
      title="RvWG"
      items={[
        {
          title: "Home",
          to: "/",
          icon: faHome
        },
        {
          title: "Information",
          to: "/information",
          icon: faInfo
        },
        {
          title: "Organisation",
          to: "/organisation",
          icon: faUsers
        },
        {
          title: "Angebot",
          to: "/angebot",
          icon: faStore
        },
        {
          title: "Aktivitäten",
          to: "/aktivitaeten",
          icon: faSun
        }
      ]}
    />
    <Container>{children}</Container>
  </>
);

export default DefaultLayout;
