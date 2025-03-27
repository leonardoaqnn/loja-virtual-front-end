let carrinho = [];

function addcarrinho(nomeProduto, precoProduto) {
    let item = {
        nome: nomeProduto,
        preco: precoProduto
    };

    carrinho.push(item);
    atualizarCarrinho();
}

function removerProduto(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let carrinhoItens = document.getElementById('carrinhoitens');
    let carrinhoTotal = document.getElementById('carrinhototal');

    carrinhoItens.innerHTML = '';
    let total = 0;

    carrinho.forEach(function(item, index) {
        let li = document.createElement('li');
        li.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

        let removerBtn = document.createElement('button');
        removerBtn.textContent = 'Remover';
        removerBtn.onclick = function() {
            removerProduto(index);
        };

        li.appendChild(removerBtn);
        carrinhoItens.appendChild(li);

        total += item.preco;
    });

    carrinhoTotal.value = `R$ ${total.toFixed(2)}`;
}
