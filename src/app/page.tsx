'use client';
import React from 'react';

import profileImage from '@/assets/profile.png';

import AnimatedBackground from '../components/animatedBackground/AnimatedBackground';
import { ProfileImage, TypeAnimate } from './pageStyle';

export default function Home(): JSX.Element {
  return (
    <div>
      <ProfileImage src={profileImage.src} alt="" />
      <TypeAnimate
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Bem-vindos!',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Eu sou o Igor Dokai',
          1000,
          'Eu sou Desenvolvedor Frontend',
          1000,
          'Eu sou Desenvolvedor Backend',
          1000,
          'Eu sou Desenvolvedor Fullstack',
          1000,
          'Eu sou Desenvolvedor Mobile',
          1000,
          'Como posso te ajudar hoje? 😉',
          1000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      <AnimatedBackground />
    </div>
  );
}

/*  */
