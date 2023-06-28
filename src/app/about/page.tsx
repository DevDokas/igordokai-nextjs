'use client';

import Slider from '@/components/techSlider/Slider';

import { Container, Main, AboutContainer, Title, AboutText } from './style';

export default function AboutPage(): JSX.Element {
  return (
    <Container>
      <Main>
        <AboutContainer>
          <Title>Sobre mim</Title>
          <div>
            <AboutText>
              Nascido em 12/01/1999, na cidade de Divinópolis, Minas Gerais,
              trago comigo uma história marcada por determinação e conquistas.
              Minha jornada educacional teve início no Colégio Integral (Centro
              de Educação Integral), onde concluí o Ensino Médio no ano de 2016,
              estabelecendo uma base sólida para meu desenvolvimento acadêmico e
              pessoal.
            </AboutText>
            <AboutText>
              Meu interesse pelas leis e pela justiça me levou a ingressar na
              Faculdade de Direito, na renomada Universidade de Itaúna, onde me
              dediquei aos estudos durante os anos seguintes. No ano de 2022,
              com muito esforço e dedicação, eu obtive a minha formação
              acadêmica nessa área tão importante.
            </AboutText>
            <AboutText>
              No entanto, além do meu talento para a advocacia, eu demonstrei
              habilidades e conhecimentos práticos na área da computação e
              programação, area esta que sempre me interessou bastante desde
              criança. Com minha capacidade de ser autodidata permitiu que eu se
              aprofundasse nessas áreas, adquirindo um vasto conhecimento em
              Desenvolvimento Web e Mobile.
            </AboutText>
            <AboutText>
              Com domínio de tecnologias como JavaScript, React.Js, Next.Js,
              React Native, Expo, MySQL, Firebase, Nginx, Ubuntu Server e outras
              semelhantes, estou pronto para enfrentar os desafios do mercado de
              trabalho. Minha paixão pela tecnologia, hardwares, softwares e
              games desde jovem me proporcionou uma intimidade natural com esses
              temas, me mantendo constantemente atualizado sobre as últimas
              tendências e avanços nesse campo empolgante.
            </AboutText>
            <AboutText>
              Minha experiência autodidata, combinada com minha formação
              acadêmica em Direito, traz uma perspectiva única e valiosa para a
              indústria da tecnologia, permitindo que eu aborde desafios de
              maneira inovadora e eficiente.
            </AboutText>
            <AboutText>
              Com meu comprometimento, habilidades técnicas e paixão pelo
              aprendizado contínuo, estou preparado para alcançar grandes
              conquistas em minha carreira como Desenvolvedor. Minha capacidade
              de adaptação, criatividade e resolução de problemas será uma
              vantagem valiosa ao enfrentar os projetos e desafios que surgirem
              em meu caminho.
            </AboutText>
            <AboutText>
              Além disso, minha ética de trabalho, combinada com minha
              habilidade de me relacionar com as pessoas, me torna um
              profissional colaborativo e interessado. Minha capacidade de
              trabalhar em equipe, comunicar-se efetivamente e ouvir os outros
              são atributos valiosos que contribuem para um ambiente de trabalho
              harmonioso e produtivo.
            </AboutText>
            <AboutText>
              A medida que eu dou os primeiros passos nesse novo capítulo
              profissional, tenho certeza de que irei continuar a crescer e me
              destacar na área da tecnologia. Minha paixão, dedicação e
              habilidades irão abrir portas para oportunidades promissoras e
              permitir que eu deixe minha marca nesse setor em constante
              evolução.
            </AboutText>
          </div>
        </AboutContainer>
        <div>
          <Title>Tecnologias</Title>
          <Slider />
        </div>
      </Main>
    </Container>
  );
}
