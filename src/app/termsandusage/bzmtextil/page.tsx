'use client';
import { Container, Title, Subtitle, Bold, Paragraph } from './style';

export default function MindzenPage(): JSX.Element {
  return (
    <Container>
      <Title>Política de Privacidade do Site BZM Textil</Title>
      <Paragraph>
        Agradecemos por visitar e utilizar nosso site. Levamos sua privacidade a
        sério e nos comprometemos a proteger suas informações pessoais. Esta
        política de privacidade descreve como coletamos, usamos, armazenamos e
        compartilhamos suas informações no contexto do Site.
      </Paragraph>
      <Subtitle>Coleta de Informações</Subtitle>
      <Bold>
        Quando você utiliza nosso Site, podemos coletar as seguintes
        informações:
      </Bold>
      <ol>
        <li>
          <Bold>Informações pessoais:</Bold>
          <Paragraph>
            Podemos solicitar informações pessoais, como nome, endereço de
            e-mail, endereço de entrega, número de telefone e outras informações
            necessárias para processar seu pedido e fornecer uma experiência
            personalizada. Essas informações são coletadas apenas com o seu
            consentimento.
          </Paragraph>
        </li>
        <li>
          <Bold>Informações de pagamento:</Bold>
          <Paragraph>
            Se você realizar uma compra em nosso Site, podemos coletar
            informações de pagamento, como detalhes do cartão de crédito ou
            outras informações necessárias para processar seu pagamento. Essas
            informações são coletadas de forma segura por meio de provedores de
            serviços de pagamento confiáveis.
          </Paragraph>
        </li>
        <li>
          <Bold>Informações de uso: </Bold>
          <Paragraph>
            Coletamos informações sobre sua interação com o Site, como páginas
            visitadas, produtos visualizados, itens adicionados ao carrinho de
            compras e padrões de navegação. Essas informações nos ajudam a
            melhorar a funcionalidade do Site, personalizar sua experiência de
            compra e oferecer recomendações relevantes.
          </Paragraph>
        </li>
      </ol>
      <Subtitle>Uso e Compartilhamento de Informações</Subtitle>
      <Bold>
        As informações coletadas são utilizadas exclusivamente para os seguintes
        fins:
      </Bold>
      <ol>
        <li>
          <Bold>Processamento de pedidos:</Bold>
          <Paragraph>
            Utilizamos suas informações pessoais e de pagamento para processar
            seus pedidos, fornecer atualizações sobre o status da entrega e
            garantir uma experiência de compra eficiente.
          </Paragraph>
        </li>
        <li>
          <Bold>Personalização da experiência: </Bold>
          <Paragraph>
            Com base nas informações coletadas, podemos personalizar sua
            experiência no Site, recomendar produtos relevantes e oferecer
            promoções personalizadas.
          </Paragraph>
        </li>
        <li>
          <Bold>Comunicações:</Bold>
          <Paragraph>
            Podemos utilizar suas informações de contato para enviar
            comunicações relacionadas a pedidos, informações sobre produtos,
            atualizações do Site e ofertas especiais. Você pode optar por não
            receber essas comunicações a qualquer momento.
          </Paragraph>
        </li>
        <li>
          <Bold>Compartilhamento de informações: </Bold>
          <Paragraph>
            Não compartilhamos suas informações pessoais com terceiros, exceto
            quando necessário para processar seu pedido, fornecer serviços
            relacionados ao Site (por exemplo, entrega) ou cumprir obrigações
            legais.
          </Paragraph>
        </li>
      </ol>
      <Subtitle>Armazenamento e Segurança de Informações</Subtitle>
      <Paragraph>
        Tomamos medidas adequadas para proteger suas informações pessoais contra
        acesso não autorizado, divulgação, alteração ou destruição. Utilizamos
        práticas de segurança atualizadas e tecnologias criptografadas para
        garantir a integridade e a confidencialidade dos dados.
      </Paragraph>
      <Subtitle>Seus direitos</Subtitle>
      <Paragraph>
        Você tem o direito de acessar, retificar e excluir suas informações
        pessoais armazenadas em nosso Site. Além disso, pode optar por não
        fornecer determinadas informações pessoais, no entanto, isso pode
        limitar sua capacidade de usar certos recursos do Site, como realizar
        compras.
      </Paragraph>
      <Subtitle>Alterações na Política de Privacidade</Subtitle>
      <Paragraph>
        Podemos atualizar esta Política de Privacidade periodicamente para
        refletir alterações nas práticas de coleta e uso de informações.
        Recomendamos que você revise esta política regularmente para estar
        ciente de quais políticas foram ou não alteradas.
      </Paragraph>
      <Subtitle>Contato</Subtitle>
      <Paragraph>
        Se você tiver dúvidas, preocupações ou solicitações relacionadas à nossa
        Política de Privacidade ou ao uso de suas informações pessoais, entre em
        contato conosco por meio dos canais disponibilizados no Site.
      </Paragraph>
      <Subtitle>Data de vigência</Subtitle>
      <Bold>
        Esta Política de Privacidade entra em vigor a partir de 28/06/2023.
      </Bold>
      <Paragraph>
        Agradecemos novamente por utilizar nosso Site e por confiar em nossa
        abordagem de privacidade. Estamos comprometidos em proteger suas
        informações pessoais e fornecer uma experiência segura e personalizada
        para você.
      </Paragraph>
    </Container>
  );
}
