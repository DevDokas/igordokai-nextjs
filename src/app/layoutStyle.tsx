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

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #858585 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 0.7vw;
  }

  *::-webkit-scrollbar-track {
    background: ${color.sectionColor};
  }

  *::-webkit-scrollbar-thumb {
    background-color: #858585;
    border-radius: 10px;
  }
`;
