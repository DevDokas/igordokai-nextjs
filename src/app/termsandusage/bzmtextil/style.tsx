import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  width: 50vw;
  background-color: ${color.sectionColor};
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 1vh 0 1vh;
`;

export const Title = styled.h1`
  font-size: 3.5vh;
`;

export const Subtitle = styled.h2``;

export const Bold = styled.h3``;

export const Paragraph = styled.p`
  text-indent: 1vw;
`;
