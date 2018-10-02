import * as React from "react";
import "../scss/main.scss";
import { Container } from "react-bootstrap";
import { Navbar } from "../components/Navbar";

const DefaultLayout = ({ children }) => (
  <>
    <Navbar
      title="RvWG"
      items={[
        {
          title: "Home",
          to: "/"
        },
        {
          title: "Information",
          to: "/information"
        },
        {
          title: "Organisation",
          to: "/organisation"
        },
        {
          title: "Angebot",
          to: "/angebot"
        },
        {
          title: "Aktivitäten",
          to: "/aktivitaeten"
        }
      ]}
    />
    <Container>{children}</Container>
  </>
);

export default DefaultLayout;
