// 1 Agora que temos a url vamos criar um arquivo ( api.js , por exemplo) e dentro dele uma função para pegar o array com as moedas.
// 2 Crie também um arquivo HTML ( index.html , por exemplo) que deve conter uma tag para listar as crypto moedas.
// 3 Pronto, temos um array com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas aparecam na tela. Utilize o seguinte formato: Nome da moeda (símbolo da moeda): valor em dólares . Exemplo: Bitcoin (BTC): 46785.06 .
// 4 Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?
// 5 Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).

function fechtCripto(cripto) {
  fetch(`https://api.coincap.io/v2/assets/${cripto}`)
    .then((response) => {
      response.json()
      .then((data) => {
        const { name, symbol, priceUsd } = data.data;
        const criptomoeda = {
          name,
          sigla: symbol,
          value: priceUsd
        }
        append(criptomoeda)
      })
    })
}

function requestCripto() {
  fechtCripto('bitcoin')
  fechtCripto('ethereum')
  fechtCripto('tether')
  fechtCripto('binance-coin')
  fechtCripto('usd-coin')
  fechtCripto('xrp')
  fechtCripto('terra-luna')
  fechtCripto('cardano')
  fechtCripto('solana')
  fechtCripto('avalanche')
}

const append = (data) => {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divSigla = document.createElement('div');
  const divValor = document.createElement('div');

  divNome.innerHTML = data.name;
  divSigla.innerHTML = data.sigla;
  divValor.innerHTML = data.value;
  li.appendChild(divNome);
  li.appendChild(divSigla);
  li.appendChild(divValor);
  
  ul.appendChild(li);
}


window.onload = requestCripto;