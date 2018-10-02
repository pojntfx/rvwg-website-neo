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
          icon: faHome,
          description: "Startseite mit einer Übersicht und Schnellzugriff."
        },
        {
          title: "Information",
          to: "/information",
          icon: faInfo,
          description: "Alles run um die Geschichte und Gegenwart des RvWG."
        },
        {
          title: "Organisation",
          to: "/organisation",
          icon: faUsers,
          description: "News, Termine und mehr."
        },
        {
          title: "Angebot",
          to: "/angebot",
          icon: faStore,
          description:
            "Wie der Unterricht am RvWG aufgebaut ist und die Stunden belegt sind."
        },
        {
          title: "Aktivitäten",
          to: "/aktivitaeten",
          icon: faSun,
          description: "Arbeitsgemeinschaften, Ausflüge und mehr."
        }
      ]}
    />
    <Container>{children}</Container>
  </>
);

export default DefaultLayout;
