import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Body = styled.body`
  margin: 0;
  padding: 0;
  border: 0;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    ${color.darkSectionColor},
    ${color.colorBack}
  );
  font-family: 'Ubuntu', sans-serif;
  overflow: hidden;
`;
