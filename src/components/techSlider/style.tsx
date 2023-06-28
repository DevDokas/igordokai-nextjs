import * as color from '@/config/colorPalette';
import styled from 'styled-components';

export const ContainerTechnologies = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  gap: 4vw;
  height: 7vh;
  width: 61vw;
  border-left: 1vh solid ${color.whiteFont};

  .sliderAnimation {
    position: relative;
    animation: slider 300s linear infinite;

    @keyframes slider {
      0% {
        transform: translateX(-11200%);
      }
      100% {
        transform: translateX(11000%);
      }
    }
  }

  @media (min-width: 300px) and (max-width: 450px) and (min-height: 460px) and (max-height: 550px) {
    height: 40px;
    width: 250px;
    display: flex;
    justify-content: space-evenly;
    gap: 20px;

    a {
      height: 35px;
    }

    img {
      height: 30px;
    }
  }

  @media (min-height: 501px) and (max-height: 970px) and (min-width: 361px) and (max-width: 980px) {
    height: 60px;
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    gap: 30px;

    a {
      height: 45px;
    }

    img {
      height: 45px;
    }
  }

  @media (min-height: 700px) and (max-height: 800px) and (min-width: 350px) and (max-width: 450px) {
    height: 60px;
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    gap: 30px;

    a {
      height: 45px;
    }

    img {
      height: 45px;
    }
  }

  @media (min-height: 2900px) and (max-height: 3200px) and (min-width: 1300px) and (max-width: 1500px) {
    height: 285px;
    width: 1200px;
    display: flex;
    justify-content: space-evenly;
    gap: 200px;

    a {
      height: 175px;
    }

    img {
      height: 175px;
    }
  }
`;

export const TechLinks = styled.img`
  height: 5vh;
  padding: 5px 0 0 0;
  animation: slider 180s linear infinite;
  &:hover {
    transform: scale(1.1);
  }

  @keyframes slider {
    0% {
      transform: translateX(-11200%);
    }
    100% {
      transform: translateX(11000%);
    }
  }
`;
