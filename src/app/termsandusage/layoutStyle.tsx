import Link from 'next/link';

import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15vh;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MenuSubpages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 10vw;
  border-right: 0.2vh solid ${color.whiteColor};
  border-radius: 1vh 0 0 1vh;
  background-color: ${color.sectionColor};
  gap: 1.5vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const Subpage = styled(Link)`
  color: ${color.darkFont};
  text-decoration: none;
  font-size: 2vh;
  font-weight: 600;
  border-bottom: 0.01vh solid;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ChildrenPage = styled.div`
  border-radius: 1vh 0 0 1vh;
`;
