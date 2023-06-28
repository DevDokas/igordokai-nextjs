import { NavbarLink } from './style';

export default function Navbar(): JSX.Element {
  return (
    <div>
      <NavbarLink href={'/'}>Início</NavbarLink>
      <NavbarLink href={'/about'}>Sobre</NavbarLink>
      <NavbarLink href={'/portfolio'}>Projetos</NavbarLink>
    </div>
  );
}
