import * as React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title: pageTitle, ...otherProps }) => (
  <Helmet {...otherProps}>
    <html lang="de" />
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>{pageTitle} | Richard-von-Weizsäcker Gymnasium Baiersbronn</title>
  </Helmet>
);

export { Head };
