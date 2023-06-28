import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Body = styled.body`
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    ${color.darkFont},
    ${color.colorBack}
  );
  font-family: 'Ubuntu', sans-serif;
  overflow: hidden;
`;
