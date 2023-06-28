'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Container } from './style';

export default function PortfolioPage(): JSX.Element {
  return (
    <Container>
      <Carousel>
        <div>
          <p>1</p>
        </div>
        <div>
          <p>2</p>
        </div>
        <div>
          <p>3</p>
        </div>
        <div>
          <p>4</p>
        </div>
      </Carousel>
    </Container>
  );
}
