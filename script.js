
async function carregarAcoes() {
    try {
        const resposta = await fetch('https://brapi.dev/api/quote/list?token=cqsEnYwYYjW3z9DyEswQFp');
        const dados = await resposta.json();

        const container = document.getElementById('stocks-container');

        dados.stocks.slice(0, 10).forEach(acao => {
            const card = document.createElement('div');
            card.className = 'card';

            const variacaoClasse = acao.change > 0 ? 'up' : (acao.change < 0 ? 'down' : '');

            card.innerHTML = `
            <img class="logo" src="${acao.logo}" alt="Logo ${acao.name}">
            <div class="ticker">${acao.stock}</div>
            <div>${acao.name}</div>
            <div class="price">R$ ${acao.close.toFixed(2)}</div>
            <div class="change ${variacaoClasse}">${acao.change.toFixed(2)}%</div>
          `;

            container.appendChild(card);
        });

    } catch (erro) {
        console.error('Erro ao carregar ações:', erro);
        document.getElementById('stocks-container').innerHTML = '<p>Erro ao carregar dados da API.</p>';
    }
}

carregarAcoes();