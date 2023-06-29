'use client';
import { Container, Title, Subtitle, Bold, Paragraph } from './style';

export default function MindzenPage(): JSX.Element {
  return (
    <Container>
      <Title>Política de Privacidade do Aplicativo Mindzen</Title>
      <Paragraph>
        Agradecemos por escolher utilizar nosso aplicativo mobile MindZen. Nossa
        principal preocupação é garantir a privacidade e a segurança das
        informações pessoais dos nossos usuários. Este documento estabelece
        nossa política de privacidade e descreve como coletamos, usamos,
        armazenamos e compartilhamos suas informações no contexto do App.
      </Paragraph>
      <Subtitle>Coleta de Informações</Subtitle>
      <Bold>
        Quando você utiliza nosso App, podemos coletar as seguintes informações:
      </Bold>
      <ol>
        <li>
          <Bold>Informações pessoais:</Bold>
          <Paragraph>
            Podemos solicitar seu consentimento para coletar e processar
            informações pessoais, como nome, endereço de e-mail e outras
            informações que você forneça voluntariamente para personalização e
            identificação do usuário dentro do App.
          </Paragraph>
        </li>
        <li>
          <Bold>Informações de uso:</Bold>
          <Paragraph>
            Coletamos informações sobre sua interação com o App, como ações
            realizadas, configurações preferenciais e padrões de uso. Essas
            informações são utilizadas para melhorar sua experiência de uso,
            fornecer funcionalidades personalizadas e garantir o funcionamento
            adequado do App.
          </Paragraph>
        </li>
        <li>
          <Bold>Informações de dispositivo:</Bold>
          <Paragraph>
            Podemos coletar informações técnicas sobre seu dispositivo móvel,
            como modelo, sistema operacional, endereço IP e identificadores
            exclusivos. Esses dados são utilizados para fins de segurança,
            solução de problemas e análise estatística.
          </Paragraph>
        </li>
      </ol>
      <Subtitle>Uso e Compartilhamento de Informações</Subtitle>
      <Paragraph>
        Garantimos que as informações coletadas serão utilizadas exclusivamente
        para os fins descritos nesta política de privacidade. Não
        compartilharemos suas informações pessoais com terceiros para fins de
        marketing ou publicidade sem o seu consentimento expresso.
      </Paragraph>
      <Paragraph>
        No entanto, para o funcionamento adequado do App e para fornecer a você
        uma experiência personalizada, algumas informações e fotos fornecidas
        por você podem ser visíveis e acessíveis apenas dentro do App,
        permitindo que você interaja e compartilhe com outros usuários, desde
        que autorizado.
      </Paragraph>
      <Subtitle>Armazenamento e Segurança de Informações</Subtitle>
      <Paragraph>
        Tomamos medidas adequadas para garantir a segurança das informações
        coletadas. Utilizamos práticas e tecnologias atualizadas para proteger
        suas informações contra acesso não autorizado, divulgação, alteração ou
        destruição.
      </Paragraph>
      <Subtitle>Seus direitos</Subtitle>
      <Paragraph>
        Você tem o direito de acessar, retificar e excluir suas informações
        pessoais armazenadas em nosso App. Além disso, você pode optar por não
        fornecer determinadas informações pessoais, no entanto, isso pode
        limitar o uso de certas funcionalidades do App.
      </Paragraph>
      <Subtitle>Alterações na Política de Privacidade</Subtitle>
      <Paragraph>
        Podemos atualizar esta Política de Privacidade periodicamente, conforme
        necessário, para refletir alterações nas práticas de coleta e uso de
        informações. Recomendamos que você revise esta política regularmente
        para estar ciente de quaisquer atualizações.
      </Paragraph>
      <Subtitle>Contato</Subtitle>
      <Paragraph>
        Se você tiver dúvidas, preocupações ou solicitações relacionadas à nossa
        Política de Privacidade ou ao uso de suas informações pessoais, entre em
        contato conosco por meio dos canais disponibilizados no App.
      </Paragraph>
      <Subtitle>Data de vigência</Subtitle>
      <Bold>
        Esta Política de Privacidade entra em vigor a partir de 28/06/2023.
      </Bold>
      <Paragraph>
        Agradecemos novamente por utilizar nosso App e por confiar em nossa
        abordagem de privacidade. Estamos comprometidos em proteger suas
        informações pessoais e fornecer uma experiência segura e personalizada
        para você.
      </Paragraph>
    </Container>
  );
}
