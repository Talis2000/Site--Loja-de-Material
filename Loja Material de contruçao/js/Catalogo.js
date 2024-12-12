const produtos = [
    {
        nome: "Torneira com filtro",
        imagem: "imagens/imagens 2/Torneira com filtro.png",
        link: "Produto 1.html",
        preco: "R$ 99,90",
        descricao: "Torneira com filtro para água potável, ideal para sua cozinha.",
        categoria: "promoções"
    },
    {
        nome: "Bomba D'agua",
        imagem: "imagens/imagens 2/bomba agua.png",
        link: "Produto 2.html",
        preco: "R$ 245,00",
        descricao: "Bomba d'água para uso em sistemas de irrigação e abastecimento.",
        categoria: "materiais-eletricos"
    },
    {
        nome: "Assento para vaso Almofadado",
        imagem: "imagens/imagens 2/assento almofadado.png",
        link: "Produto 3.html",
        preco: "R$ 85,00",
        descricao: "Assento almofadado para vaso sanitário, conforto e qualidade.",
        categoria: "promoções"
    },
    {
        nome: "Espuma de limpeza",
        imagem: "imagens/imagens 2/espuma de limpeza.png",
        link: "Produto 4.html",
        preco: "R$ 18,90",
        descricao: "Espuma de limpeza para uso doméstico e comercial.",
        categoria: "promoções"
    },
    {
        nome: "Textura branco DELCOR",
        imagem: "imagens/imagens 2/tinta emborrachada branco.png",
        link: "Produto 5.html",
        preco: "R$ 99,00",
        descricao: "Textura branca ideal para acabamento de paredes.",
        categoria: "tintas"
    },
    {
        nome: "Textura BRILVINIL Acrilico",
        imagem: "imagens/imagens 2/textura branco.png",
        link: "Produto 6.html",
        preco: "R$ 45,00",
        descricao: "Textura acrílica para revestimento de superfícies.",
        categoria: "tintas"
    },
    {
        nome: "Lampada amarela RETRO",
        imagem: "imagens/imagens 2/lampadas retro.png",
        link: "Produto 7.html",
        preco: "R$ 45,00",
        descricao: "Lâmpada retro amarela, ideal para decoração vintage.",
        categoria: "materiais-eletricos"
    },
    {
        nome: "Ducha para banheiro",
        imagem: "imagens/imagens 2/chuveirinho banheiro.png",
        link: "Produto 8.html",
        preco: "R$ 45,00",
        descricao: "Ducha de banheiro compacta e eficiente.",
        categoria: "promoções"
    },
    {
        nome: "Botão Rápido Desarme",
        imagem: "imagens/imagens 2/botoeira lisga e desliga trifasico.png",
        link: "Produto 9.html",
        preco: "R$ 45,00",
        descricao: "Botão rápido de desarme trifásico, ideal para circuitos elétricos.",
        categoria: "materiais-eletricos"
    },
    {
        nome: "Tinta Spray",
        imagem: "imagens/imagens 2/Tinta spray.png",
        link: "Produto 10.html",
        preco: "R$ 45,00",
        descricao: "Tinta spray para pintura de superfícies metálicas e plásticas.",
        categoria: "tintas"
    },
    {
        nome: "Luminária de Teto",
        imagem: "imagens/imagens 2/Luminaria.png",
        link: "Produto 11.html",
        preco: "R$ 99,90",
        descricao: "Luminária de teto moderna para iluminação ambiente.",
        categoria: "materiais-eletricos"
    },
    {
        nome: "Botão Rápido Desarme 3.7kw",
        imagem: "imagens/iten11.jpeg",
        link: "Produto 12.html",
        preco: "R$ 45,00",
        descricao: "Botão rápido de desarme 3.7kw para segurança elétrica.",
        categoria: "materiais-eletricos"
    },
    {
        nome: "Sensor de presença para alarme",
        imagem: "imagens/imagens 2/sensor de presença.png",
        link: "Produto 13.html",
        preco: "R$ 45,00",
        descricao: "Sensor de presença para alarme, ideal para segurança.",
        categoria: "materiais-eletricos"
    },
    {
        nome: "Canos Variedades",
        imagem: "imagens/Canos.png", // Substitua com a imagem correta
        link: "Produto 14.html",
        preco: "R$ 45,00",
        descricao: "Canos para encanamento, disponíveis em vários tamanhos.",
        categoria: "ferramentas"
    },
    {
        nome: "Máscara de proteção",
        imagem: "imagens/imagens 2/Mascara com filtro carvão.png",
        link: "Produto 15.html",
        preco: "R$ 45,00",
        descricao: "Máscara de proteção com filtro carvão para ambientes industriais.",
        categoria: "promoções"
    },
    {
        nome: "Caixa D'água 500L",
        imagem: "imagens/imagens 2/caixa Agua 500L.png",
        link: "Produto 16.html",
        preco: "R$ 500,00",
        descricao: "Caixa d'água de 500L para uso doméstico ou comercial.",
        categoria: "promoções"
    },
    {
        nome: "Tinta Diapiso Iquine",
        imagem: "imagens/imagens 2/Tinta piso diapiso.png",
        link: "Produto 17.html",
        preco: "R$ 45,00",
        descricao: "Tinta Diapiso ideal para pisos e áreas externas.",
        categoria: "tintas"
    },
    {
        nome: "Tinta Acrílica Brivinil",
        imagem: "imagens/imagens 2/tinta branca acrilico.png",
        link: "Produto 18.html",
        preco: "R$ 45,00",
        descricao: "Tinta acrílica Brivinil para acabamento de paredes internas.",
        categoria: "tintas"
    },
    {
        nome: "Alicate para Rebites",
        imagem: "imagens/imagens 2/alicate de arribite.png",
        link: "Produto 19.html",
        preco: "R$ 45,00",
        descricao: "Alicate para rebites, ideal para manutenção e consertos.",
        categoria: "ferramentas"
    },
    {
        nome: "Treina Starret",
        imagem: "imagens/imagens 2/treina 5 m.png",
        link: "Produto 20.html",
        preco: "R$ 45,00",
        descricao: "Treina Starret de 5 metros, ideal para medições precisas.",
        categoria: "ferramentas"
    }
];

// Função para corrigir o caminho das imagens
function corrigirCaminhoImagem(caminho) {
    return caminho.replace(/ /g, '%20');
}

function carregarProdutos() {
    const categorias = {
        'promoções': document.getElementById('promocoes-container'),
        'materiais-eletricos': document.getElementById('materiais-eletricos-container'),
        'ferramentas': document.getElementById('ferramentas-container'),
        'tintas': document.getElementById('tintas-container')
    };

    produtos.forEach(produto => {
        const figure = document.createElement('figure');
        const link = document.createElement('a');
        link.href = "#";  // Muda de link para abrir detalhes

        const img = document.createElement('img');
        img.src = corrigirCaminhoImagem(produto.imagem);
        img.alt = produto.nome;

        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `${produto.nome}<br>${produto.preco}`;

        link.appendChild(img);
        link.appendChild(figcaption);
        figure.appendChild(link);

        // Quando clicar no produto, mostrar detalhes
        link.onclick = function () {
            mostrarDetalhes(produto);
        };

        categorias[produto.categoria].appendChild(figure);
    });
}

// Função para mostrar os detalhes do produto
function mostrarDetalhes(produto) {
    const details = document.getElementById('product-details');
    document.getElementById('product-image').src = corrigirCaminhoImagem(produto.imagem);
    document.getElementById('product-name').textContent = produto.nome;
    document.getElementById('product-price').textContent = produto.preco;
    document.getElementById('product-description').textContent = produto.descricao;
    details.style.display = 'block';
}

// Função para fechar o painel de detalhes do produto
document.getElementById('close-details').onclick = function () {
    const details = document.getElementById('product-details');
    details.style.display = 'none';
};

// Função de adicionar ao carrinho
function adicionarCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}

window.onload = carregarProdutos;
// Função para adicionar um produto ao carrinho
function adicionarCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o produto já está no carrinho
    const index = carrinho.findIndex(item => item.nome === produto.nome);
    if (index !== -1) {
        carrinho[index].quantidade++; // Se já estiver, incrementa a quantidade
    } else {
        produto.quantidade = 1; // Se não estiver, adiciona a quantidade 1
        carrinho.push(produto);
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
    atualizarContadorCarrinho(); // Atualiza o contador do carrinho
}

// Função para atualizar o contador de itens no carrinho (no botão)
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const cartCount = carrinho.reduce((total, item) => total + item.quantidade, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Função para exibir o carrinho na página
function exibirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Criar uma interface para exibir os produtos do carrinho
    const carrinhoContainer = document.createElement('div');
    carrinhoContainer.classList.add('cart-container');

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>O carrinho está vazio.</p>';
    } else {
        carrinho.forEach(produto => {
            const item = document.createElement('div');
            item.classList.add('cart-item');
            item.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" width="50">
                <div>
                    <p><strong>${produto.nome}</strong></p>
                    <p>Preço: ${produto.preco}</p>
                    <p>Quantidade: ${produto.quantidade}</p>
                </div>
                <button onclick="removerProdutoCarrinho('${produto.nome}')">Remover</button>
            `;
            carrinhoContainer.appendChild(item);
        });
    }

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar Carrinho';
    closeButton.onclick = function() {
        document.body.removeChild(carrinhoContainer); // Fecha o carrinho
    };
    carrinhoContainer.appendChild(closeButton);

    document.body.appendChild(carrinhoContainer);
}

// Função para remover um produto do carrinho
function removerProdutoCarrinho(nomeProduto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(item => item.nome !== nomeProduto); // Filtra o produto removido
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto removido do carrinho!');
    atualizarContadorCarrinho(); // Atualiza o contador do carrinho
}
window.onload = function() {
    carregarProdutos(); // Carrega os produtos
    atualizarContadorCarrinho(); // Atualiza o contador do carrinho
};
