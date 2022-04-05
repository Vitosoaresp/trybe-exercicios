import React from 'react';

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    const string = conteudos
      .map( ({ conteudo, bloco, status}) => 
        <p>O conteudo é {conteudo},
        Status: {status},
        Bloco: {bloco}.</p>
      );

    return <main className='main'>{string}</main>;
  }
}

export default Content;