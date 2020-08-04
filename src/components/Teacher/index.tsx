import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import { Container } from './styles';

const Teacher: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/2119919?s=460&u=21b7da9ce9be2163076f1fa85f0986198f98f152&v=4"
          alt="Paulo Amigoni"
        />

        <div>
          <strong>Paulo Henrique Amigoni</strong>
          <span>Desenvolvimento</span>
        </div>
      </header>

      <p>
      Oi! Meu nome é Paulo Henrique Amigoni.<br/>
      Sou desenvolvedor web e sou muito apaixonado e dedicado ao meu trabalho.
      Com 8 anos de experiência como desenvolvedor Web profissional, adquiri as habilidades e os conhecimentos necessários para tornar o meu, seu, o nosso projeto um sucesso.<br/>
      Eu aprecio cada passo do processo de desenvolvimento e design, desde a discussão e colaboração até o conceito e a execução, mas eu acho mais satisfatório ver o produto acabado fazendo tudo para você que foi criado para fazer.
      </p>

      <footer>
        <p>
          Preço:
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default Teacher;
