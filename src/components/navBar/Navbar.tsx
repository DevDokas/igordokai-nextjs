import { Container, NavContainer, NavbarLink } from './style';

export default function Navbar(): JSX.Element {
  return (
    <Container>
      <NavContainer>
        <NavbarLink href={'/'}>Início</NavbarLink>
        <NavbarLink href={'/about'}>Sobre</NavbarLink>
        <NavbarLink href={'/portfolio'}>Projetos</NavbarLink>
        <NavbarLink href={'/termsandusage'}>Termos & Uso</NavbarLink>
      </NavContainer>
    </Container>
  );
}
