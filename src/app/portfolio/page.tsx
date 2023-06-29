'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import bzmtexilImg from '@/assets/bzmtextil.jpg';
import calculadoraImg from '@/assets/calculadora.jpg';
import findstoreImg from '@/assets/findstore.jpg';
import flappybirdImg from '@/assets/flappybird.jpg';
import pokedexImg from '@/assets/pokedex.jpg';
import todolistImg from '@/assets/todolist.jpg';

import {
  Container,
  CarouselItemContainer,
  CarouselItemLink,
  CarouselItemTitle,
  CarouselItemImage
} from './style';

export default function PortfolioPage(): JSX.Element {
  return (
    <Container>
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
      >
        <CarouselItemContainer>
          <CarouselItemLink href="https://calculadora-dokai.vercel.app">
            <CarouselItemImage src={calculadoraImg.src} />
            <CarouselItemTitle>Calculadora</CarouselItemTitle>
          </CarouselItemLink>
        </CarouselItemContainer>
        <CarouselItemContainer>
          <CarouselItemLink href="https://lista-de-tarefas-dokai.vercel.app">
            <CarouselItemImage src={todolistImg.src} />
            <CarouselItemTitle>Lista de tarefas</CarouselItemTitle>
          </CarouselItemLink>
        </CarouselItemContainer>
        <CarouselItemContainer>
          <CarouselItemLink href="https://flappy-dokas.vercel.app">
            <CarouselItemImage src={flappybirdImg.src} />
            <CarouselItemTitle>Flappy Bird</CarouselItemTitle>
          </CarouselItemLink>
        </CarouselItemContainer>
        <CarouselItemContainer>
          <CarouselItemLink href="https://bzmtextil.com.br">
            <CarouselItemImage src={bzmtexilImg.src} />
            <CarouselItemTitle>BZM Textil</CarouselItemTitle>
          </CarouselItemLink>
        </CarouselItemContainer>
        <CarouselItemContainer>
          <CarouselItemLink href="https://pokedex-ashy-seven.vercel.app">
            <CarouselItemImage src={pokedexImg.src} />
            <CarouselItemTitle>Pokedex</CarouselItemTitle>
          </CarouselItemLink>
        </CarouselItemContainer>
        <CarouselItemContainer>
          <CarouselItemLink href="https://find-solucoes-frontend.vercel.app">
            <CarouselItemImage src={findstoreImg.src} />
            <CarouselItemTitle>
              Find Soluções - Teste de admissão
            </CarouselItemTitle>
          </CarouselItemLink>
        </CarouselItemContainer>
      </Carousel>
    </Container>
  );
}
