import * as React from "react";
import "../scss/main.scss";
import { Container } from "react-bootstrap";
import { Navbar } from "../components/Navbar";
import {
  faHome,
  faInfo,
  faUsers,
  faStore,
  faSun,
  faPhone,
  faBalanceScale,
  faImages,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../components/Footer";
import { injectGlobal } from "styled-components";

injectGlobal`
  body {
    background-image: url(/img/bg.jpg);
    background-color: white;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
  }
`;

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
    <Footer
      items={[
        { title: "Kontakt", icon: faPhone, to: "/kontakt" },
        { title: "Impressum", icon: faBalanceScale, to: "/impressum" },
        { title: "Medienlizenz", icon: faImages, to: "/medien-lizenz" },
        { title: "Codelizenz", icon: faCode, to: "/code-lizenz" }
      ]}
    />
  </>
);

export default DefaultLayout;
