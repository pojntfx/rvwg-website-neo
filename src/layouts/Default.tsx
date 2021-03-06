import * as React from "react";
import "../scss/main.scss";
import { Container, Card, Image, Table } from "react-bootstrap";
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
import { MDXProvider } from "@mdx-js/tag";
import { Link } from "../components/Link";

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

interface IDefaultLayout {
  location: any;
  children: any;
  noWrapper?: boolean;
}

const DefaultLayout = ({ location, children, noWrapper }: IDefaultLayout) => (
  <MDXProvider
    components={{
      a: ({ href, children, ...otherProps }) => (
        <Link to={href} {...otherProps}>
          {children}
        </Link>
      ),
      img: ({ src, ...otherProps }) => (
        <Link to={src}>
          <Image fluid src={src} {...otherProps} />
        </Link>
      ),
      blockquote: ({ children, ...otherProps }) => (
        <blockquote className="blockquote" {...otherProps}>
          <i>{children}</i>
        </blockquote>
      ),
      table: ({ children, ...otherProps }) => (
        <Table responsive {...otherProps}>
          {children}
        </Table>
      )
    }}
  >
    <Navbar
      location={location}
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

    <Container>
      {noWrapper ? (
        children
      ) : (
        <Card body className="mt-3">
          {children}
        </Card>
      )}
    </Container>
    <Footer
      items={[
        { title: "Kontakt", icon: faPhone, to: "/kontakt" },
        { title: "Impressum", icon: faBalanceScale, to: "/impressum" },
        { title: "Medienlizenz", icon: faImages, to: "/medien-lizenz" },
        { title: "Codelizenz", icon: faCode, to: "/code-lizenz" }
      ]}
    />
  </MDXProvider>
);

export default DefaultLayout;
