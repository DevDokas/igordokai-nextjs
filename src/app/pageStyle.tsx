import { TypeAnimation } from 'react-type-animation';

import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const ProfileImage = styled.img`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.1vh solid ${color.darkFont};
  border-radius: 50%;
  height: 20vh;
`;

export const TypeAnimate = styled(TypeAnimation)`
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5vh;
  display: inline-block;
  color: ${color.whiteFont};
`;
