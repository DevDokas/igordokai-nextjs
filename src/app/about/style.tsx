import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13vh;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
`;

export const AboutContainer = styled.div`
  padding: 1.5vh;
  width: 60vw;
  border-left: 1vw solid;
  border-color: linear-gradient(
    ${(color.borderTextGradient01,
    color.borderTextGradient02,
    color.borderTextGradient03)}
  );
  color: ${color.whiteFont};
`;

export const Title = styled.h1`
  color: black;
  font-size: 2.5vh;
`;

export const AboutText = styled.p`
  text-indent: 1vw;
  margin-top: 0.75vh;
  margin-bottom: 0.75vh;
`;
