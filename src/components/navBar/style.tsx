import Link from 'next/link';

import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
`;

export const NavContainer = styled.div`
  position: fixed;
  display: flex;
  top: 3vh;
  left: 50%;
  gap: 1.5vw;
`;

export const NavbarLink = styled(Link)`
  border: 0.01vh solid ${color.whiteFont};
  border-radius: 3vh;
  padding: 0.5vh 0.5vw 0.5vh 0.5vw;
  text-decoration: none;
  color: ${color.whiteFont};
`;
