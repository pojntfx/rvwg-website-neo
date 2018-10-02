import * as React from "react";
import { Carousel as CarouselTemplate } from "react-bootstrap";
import styled from "styled-components";

const CarouselWrapper = styled(CarouselTemplate)`
  margin-top: 1em;
  & > .carousel-inner {
    border-radius: 0.25rem;
  }
  margin-bottom: 1em;
`;

const DescriptionWrapper = styled.div`
  padding: 0.5rem;
  padding-bottom: 0.1rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.25rem;
`;

interface ISlide {
  imgSrc: string;
  alt: string;
  header: string;
  description: string;
}

interface ICarousel {
  slides: ISlide[];
}

const Carousel = (props: ICarousel) => (
  <CarouselWrapper>
    {props.slides.map(({ imgSrc, alt, header, description }, index) => (
      <CarouselTemplate.Item key={index}>
        <img className="d-block w-100" src={imgSrc} alt={alt} />
        <CarouselTemplate.Caption>
          <DescriptionWrapper>
            <h5>{header}</h5>
            <p>{description}</p>
          </DescriptionWrapper>
        </CarouselTemplate.Caption>
      </CarouselTemplate.Item>
    ))}
  </CarouselWrapper>
);

export { Carousel };
