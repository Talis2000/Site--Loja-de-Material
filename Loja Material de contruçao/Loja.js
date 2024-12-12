// Produtos na categoria de promoções
const promocoes = [
    { id: 1, nome: "Torneira com filtro", preco: "R$ 99,90", imagem: "imagens/imagens 2/Torneira com filtro.png", link: "Produto 1.html" },
    { id: 2, nome: "Espuma de limpeza", preco: "R$ 18,90", imagem: "imagens/imagens 2/espuma de limpeza.png", link: "Produto 4.html" },
    { id: 3, nome: "Ducha para banheiro", preco: "R$ 45,00", imagem: "imagens/imagens 2/chuveirinho banheiro.png", link: "Produto 8.html" },
    { id: 4, nome: "Máscara de proteção", preco: "R$ 45,00", imagem: "imagens/imagens 2/Mascara com filtro carvão.png", link: "Produto 15.html" },
    { id: 5, nome: "Caixa D'água 500L", preco: "R$ 500,00", imagem: "imagens/imagens 2/caixa Agua 500L.png", link: "Produto 16.html" }
];

// Produtos organizados por categorias
const categorias = {
    "materiais-eletricos": [
        { nome: "Bomba D'agua", preco: "R$ 245,00", imagem: "imagens/imagens 2/bomba agua.png", link: "Produto 2.html" },
        { nome: "Lampada amarela RETRO", preco: "R$ 45,00", imagem: "imagens/imagens 2/lampadas retro.png", link: "Produto 7.html" },
        { nome: "Botão Rápido Desarme", preco: "R$ 45,00", imagem: "imagens/imagens 2/botoeira lisga e desliga trifasico.png", link: "Produto 9.html" },
        { nome: "Botão Rápido Desarme 3.7kw", preco: "R$ 45,00", imagem: "imagens/iten11.jpeg", link: "Produto 12.html" },
        { nome: "Sensor de presença para alarme", preco: "R$ 45,00", imagem: "imagens/imagens 2/sensor de presença.png", link: "Produto 13.html" }
    ],
    ferramentas: [
        { nome: "Assento para vaso Almofadado", preco: "R$ 85,00", imagem: "imagens/imagens 2/assento almofadado.png", link: "Produto 3.html" },
        { nome: "Canos Variedades", preco: "R$ 45,00", imagem: "imagens/", link: "Produto 14.html" },
        { nome: "Alicate para Rebites", preco: "R$ 45,00", imagem: "imagens/imagens 2/alicate de arribite.png", link: "Produto 19.html" },
        { nome: "Treina Starret", preco: "R$ 45,00", imagem: "imagens/imagens 2/treina 5 m.png", link: "Produto 20.html" }
    ],
    tintas: [
        { nome: "Textura branco DELCOR", preco: "R$ 99,00", imagem: "imagens/imagens 2/tinta emborrachada branco.png", link: "Produto 5.html" },
        { nome: "Textura BRILVINIL Acrilico", preco: "R$ 45,00", imagem: "imagens/imagens 2/textura branco.png", link: "Produto 6.html" },
        { nome: "Tinta Spray", preco: "R$ 45,00", imagem: "imagens/imagens 2/Tinta spray.png", link: "Produto 10.html" },
        { nome: "Luminária de Teto", preco: "R$ 99,90", imagem: "imagens/imagens 2/Luminaria.png", link: "Produto 11.html" },
        { nome: "Tinta Diapiso Iquine", preco: "R$ 45,00", imagem: "imagens/imagens 2/Tinta piso diapiso.png", link: "Produto 17.html" },
        { nome: "Tinta Acrílica Brivinil", preco: "R$ 45,00", imagem: "imagens/imagens 2/tinta branca acrilico.png", link: "Produto 18.html" }
    ]
};

// Limitar o número de promoções a serem exibidas (exemplo: 3)
const limitePromocoes = 5;

// Limitar o número de produtos por categoria (exemplo: 2 por categoria)
const limiteCategorias = 5;

// Função para carregar promoções (com limite)
function carregarPromocoes() {
    const container = document.getElementById("promocoes-container");
    promocoes.slice(0, limitePromocoes).forEach(produto => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <a href="${produto.link}">
                <img src="${produto.imagem}" alt="${produto.nome}" style="width:100%; border-radius:10px;">
                <h3>${produto.nome}</h3>
                <p>${produto.preco}</p>
            </a>
        `;
        container.appendChild(card);
    });
}

// Função para carregar categorias (com limite)
function carregarCategorias() {
    for (const [categoria, produtos] of Object.entries(categorias)) {
        const container = document.getElementById(`${categoria}-container`);
        produtos.slice(0, limiteCategorias).forEach(produto => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <a href="${produto.link}">
                    <img src="${produto.imagem}" alt="${produto.nome}" style="width:100%; border-radius:10px;">
                    <h3>${produto.nome}</h3>
                    <p>${produto.preco}</p>
                </a>
            `;
            container.appendChild(card);
        });
    }
}

// Inicializar ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    carregarPromocoes();
    carregarCategorias();
});

// Função para filtro de pesquisa
function filtrarProdutos() {
    const pesquisa = document.getElementById("pesquisa").value.toLowerCase();
    alert(`Pesquisando por: ${pesquisa}`);
}

// Funções de login e cadastro

// Função para abrir o modal
// Função para abrir o modal e ativar o fundo
function abrirModal() {
    document.getElementById("modal").style.display = "block";
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "overlay";
    document.body.appendChild(overlay); // Adiciona o fundo escuro
}

// Função para fechar o modal e remover o fundo
function fecharModal() {
    document.getElementById("modal").style.display = "none";
    const overlay = document.getElementById("overlay");
    if (overlay) {
        document.body.removeChild(overlay); // Remove o fundo escuro
    }
}


// Função para mostrar o formulário de login
function mostrarLogin() {
    document.getElementById("formulario-login").style.display = "block";
    document.getElementById("formulario-cadastro").style.display = "none";
}

// Função para mostrar o formulário de cadastro
function mostrarCadastro() {
    document.getElementById("formulario-login").style.display = "none";
    document.getElementById("formulario-cadastro").style.display = "block";
}

// Função de login
function logar() {
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;
    alert(`Login realizado com o e-mail: ${email}`);
    fecharModal();
}

// Função de cadastro
function cadastrar() {
    const nome = document.getElementById("cadastro-nome").value;
    const email = document.getElementById("cadastro-email").value;
    const senha = document.getElementById("cadastro-senha").value;
    alert(`Cadastro realizado para o e-mail: ${email}`);
    fecharModal();
}
