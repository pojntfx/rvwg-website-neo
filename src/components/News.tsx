import * as React from "react";
import { Card, CardColumns } from "react-bootstrap";
import { Link } from "./Link";
import { Button } from "./Button";
import { faArrowRight, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";

const config = [
  {
    title:
      "Elternbrief zum Schuljahrsbeginn 2018-19 und Einladung zu den Elternpfelgschaftssitzungen",
    date: "14.09.2018",
    excerpt: `Weiter unten finden Sie die Einladung zu den Klassenpflegschaftssitzungen mit einer
      Tagesordnung, die natürlich von Elternseite ergänzt werden darf. Bei den Elternabenden möchte
      ich kurz mit Ihnen ins...`,
    imgSrc:
      "https://www.rvwg.de/fileadmin/_processed_/9/2/csm_180914_Elternbrief_3_48bb56987a.jpg",
    alt: "Elternbrief",
    to:
      "https://www.rvwg.de/organisatorisches/news/news/artikel/news/elternbrief-zum-schuljahrsbeginn-2018-19-und-einladung-zu-den-elternpfelgschaftssitzungen/?tx_news_pi1%5Bcontroller%5D=News&tx_news_pi1%5Baction%5D=detail&cHash=f5c690f9998e65bdf01a51ac6ddd2b55"
  }
];

const News = () => (
  <Card body className="mt-3">
    <Card.Title>
      <Icon icon={faNewspaper} />
      Neuigkeiten
    </Card.Title>
    <CardColumns>
      {config.map(({ title, date, excerpt, imgSrc, alt, to }, index) => (
        <Card key={index}>
          <Link to={to}>
            <Card.Img variant="top" src={imgSrc} alt={alt} />
          </Link>
          <Card.Body>
            <Link to={to}>
              <Card.Title>{title}</Card.Title>
            </Link>
            <Card.Text>{excerpt}</Card.Text>
            <Link to={to}>
              <Button icon={faArrowRight} content="Mehr lesen" />
            </Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Veröffentlicht am {date}</small>
          </Card.Footer>
        </Card>
      ))}
    </CardColumns>
  </Card>
);

export { News };
