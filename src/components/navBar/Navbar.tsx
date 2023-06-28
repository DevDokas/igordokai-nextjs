import { useState } from 'react';

import * as color from '@/config/colorPalette';

import { Container, NavContainer, NavbarLink } from './style';

export default function Navbar(): JSX.Element {
  const [homeColor, setHomeColor] = useState<string>(color.navButtonA);
  const [homeScale, setHomeScale] = useState<string>('1.15');
  const [aboutColor, setAboutColor] = useState<string>(color.navButtonI);
  const [aboutScale, setAboutScale] = useState<string>('1');
  const [portfolioColor, setPortfolioColor] = useState<string>(
    color.navButtonI
  );
  const [portfolioScale, setPortfolioScale] = useState<string>('1');
  const [termsUseColor, setTermsUseColor] = useState<string>(color.navButtonI);
  const [termsUseScale, setTermsUseScale] = useState<string>('1');

  return (
    <Container>
      <NavContainer>
        <NavbarLink
          style={{ color: homeColor, borderColor: homeColor, scale: homeScale }}
          onClick={() => {
            setHomeColor(color.navButtonA);
            setHomeScale('1.15');
            setAboutColor(color.navButtonI);
            setAboutScale('1');
            setPortfolioColor(color.navButtonI);
            setPortfolioScale('1');
            setTermsUseColor(color.navButtonI);
            setTermsUseScale('1');
          }}
          href={'/'}
        >
          Início
        </NavbarLink>
        <NavbarLink
          style={{
            color: aboutColor,
            borderColor: aboutColor,
            scale: aboutScale
          }}
          onClick={() => {
            setHomeColor(color.navButtonI);
            setHomeScale('1');
            setAboutColor(color.navButtonA);
            setAboutScale('1.15');
            setPortfolioColor(color.navButtonI);
            setPortfolioScale('1');
            setTermsUseColor(color.navButtonI);
            setTermsUseScale('1');
          }}
          href={'/about'}
        >
          Sobre
        </NavbarLink>
        <NavbarLink
          style={{
            color: portfolioColor,
            borderColor: portfolioColor,
            scale: portfolioScale
          }}
          onClick={() => {
            setHomeColor(color.navButtonI);
            setHomeScale('1');
            setAboutColor(color.navButtonI);
            setAboutScale('1');
            setPortfolioColor(color.navButtonA);
            setPortfolioScale('1.15');
            setTermsUseColor(color.navButtonI);
            setTermsUseScale('1');
          }}
          href={'/portfolio'}
        >
          Projetos
        </NavbarLink>
        <NavbarLink
          style={{
            color: termsUseColor,
            borderColor: termsUseColor,
            scale: termsUseScale
          }}
          onClick={() => {
            setHomeColor(color.navButtonI);
            setHomeScale('1');
            setAboutColor(color.navButtonI);
            setAboutScale('1');
            setPortfolioColor(color.navButtonI);
            setPortfolioScale('1');
            setTermsUseColor(color.navButtonA);
            setTermsUseScale('1.15');
          }}
          href={'/termsandusage'}
        >
          Termos & Uso
        </NavbarLink>
      </NavContainer>
    </Container>
  );
}
