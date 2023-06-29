'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import profileImage from '@/assets/profile.png';

import AnimatedBackground from '../components/animatedBackground/AnimatedBackground';
import {
  ProfileImage,
  TypeAnimate,
  SocialMediasContainer,
  LinkSocialMedia
} from './pageStyle';

export default function Home(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <ProfileImage src={profileImage.src} alt="" />
      <TypeAnimate
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Bem-vindos!',
          1500, // wait 1s before replacing "Mice" with "Hamsters"
          'Eu sou o Igor Dokai',
          1500,
          'Eu sou Desenvolvedor Frontend',
          1500,
          'Eu sou Desenvolvedor Backend',
          1500,
          'Eu sou Desenvolvedor Fullstack',
          1500,
          'Eu sou Desenvolvedor Mobile',
          1500,
          'Como posso te ajudar hoje? 😉',
          2000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      <SocialMediasContainer>
        <LinkSocialMedia
          target="_blank"
          href="https://www.linkedin.com/in/igor-nogueira-gomes-de-sousa-56a37125b/"
        >
          <FaLinkedin />
        </LinkSocialMedia>
        <LinkSocialMedia
          target="_blank"
          href="https://www.instagram.com/igordokai/?igshid=ZDc4ODBmNjlmNQ%3D%3D"
        >
          <FaInstagram />
        </LinkSocialMedia>
        <LinkSocialMedia target="_blank" href="https://github.com/DevDokas">
          <FaGithub />
        </LinkSocialMedia>
      </SocialMediasContainer>
      <AnimatedBackground />
    </>
  );
}

/*  */
