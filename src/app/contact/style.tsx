import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vh;
  border: 0;
  border-radius: 1vh;
  background-color: ${color.sectionColor};
`;

export const Label = styled.h1`
  font-size: 3vh;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
`;

export const InputLabel = styled.p``;

export const Input = styled.input`
  height: 2.5vh;
  width: 20vw;
  border: 0;
  border-radius: 1vh;
  font-size: 1.5vh;

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  height: 10vh;
  width: 20vw;
  border: 0;
  border-radius: 1vh;
  font-size: 1.5vh;
  overflow-x: hidden;

  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  height: 2.5vh;
  width: 10vw;
  border: 0;
  border-radius: 1vh;
  margin-top: 3vh;
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }
`;
