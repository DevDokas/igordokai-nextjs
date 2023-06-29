import Link from 'next/link';

import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 50vw;
  background-color: ${color.sectionColor};
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Paragraph = styled.p`
  text-indent: 1vw;
`;
