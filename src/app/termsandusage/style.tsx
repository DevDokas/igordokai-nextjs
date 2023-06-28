import Link from 'next/link';

import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13vh;
`;

export const AppsSection = styled.section`
  height: 80vh;
  width: 60vw;
  border: 0;
  border-radius: 3vh;
  background-color: ${color.sectionColor};
`;

export const AppContainer = styled.div``;
