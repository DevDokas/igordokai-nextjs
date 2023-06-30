'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';

import emailjs from '@emailjs/browser';

import {
  Container,
  Form,
  Label,
  InputContainer,
  InputLabel,
  Input,
  Textarea,
  SendButton
} from './style';

export default function ContactUsPage(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function sendEmail(e: any): void {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      toast.error('Preencha os campos adequadamente para enviar o formulário');
    } else if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        from_name: name,
        email,
        message
      };

      emailjs
        .send(
          'service_sobv3je',
          'template_8n93bor',
          templateParams,
          'ceRKIx7rSvk7u8IC_'
        )
        .then((res) => {
          toast.success('Mensagem enviada com sucesso!');
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((err) => {
          toast.error(
            'Erro ao enviar sua mensagem; Tente novamente.',
            err.status
          );
        });
    }
  }

  return (
    <Container>
      <Form>
        <Label>Entre em contato</Label>
        <InputContainer>
          <InputLabel>Nome</InputLabel>
          <Input
            type="text"
            placeholder="Seu nome ..."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>E-mail</InputLabel>
          <Input
            type="text"
            placeholder="exemplo@exemplo.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Mensagem</InputLabel>
          <Textarea
            placeholder="Sua mensagem ..."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </InputContainer>
        <SendButton
          onClick={(e) => {
            sendEmail(e);
          }}
        >
          Enviar
        </SendButton>
      </Form>
    </Container>
  );
}
