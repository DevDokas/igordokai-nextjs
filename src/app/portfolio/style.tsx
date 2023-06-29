import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13vh;
`;

export const CarouselItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
`;

export const CarouselItemLink = styled.a`
  text-decoration: none;
  border: 0;
  border-radius: 1vh;
`;

export const CarouselItemTitle = styled.p`
  margin-top: -0.5vh;
  padding: 3.5vh;
  color: ${color.darkFont};
  background-color: ${color.sectionColor};
  max-width: 50vw;
  border: 0;
  border-radius: 0 0 1vh 1vh;
  font-size: 3vh;
  font-weight: 600;
`;

export const CarouselItemImage = styled.img`
  height: 70vh;
  max-width: 50vw;
  border: 0;
  border-radius: 1vh 1vh 0 0;
`;
