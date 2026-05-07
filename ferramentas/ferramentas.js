const produtos = [
    { id: 101, nome: "Martelo de Unha 27mm", preco: 35.90, cat: "Manual", img: "img/martelo.jpg" },
    { id: 102, nome: "Trena Métrica 5m", preco: 15.00, cat: "Medição", img: "img/trena.jpg" },
    { id: 103, nome: "Nível de Alumínio 30cm", preco: 28.50, cat: "Medição", img: "img/nivel.jpg" },
    { id: 104, nome: "Colher de Pedreiro 9\"", preco: 22.00, cat: "Manual", img: "img/colher.jpg" },
    { id: 105, nome: "Desempenadeira de Aço", preco: 19.90, cat: "Manual", img: "img/desempenadeira.jpg" },
    { id: 106, nome: "Marreta 1kg com Cabo", preco: 42.00, cat: "Manual", img: "img/marreta.jpg" },
    { id: 107, nome: "Esquadro de Metal", preco: 18.00, cat: "Medição", img: "img/esquadro.jpg" },
    { id: 108, nome: "Torquês Armador 12\"", preco: 45.00, cat: "Manual", img: "img/torques.jpg" },
    { id: 109, nome: "Furadeira de Impacto 500W", preco: 189.90, cat: "Elétrica", img: "img/furadeira.jpg" },
    { id: 110, nome: "Serra Mármore (Makita)", preco: 350.00, cat: "Elétrica", img: "img/serra.jpg" },
    { id: 111, nome: "Disco Diamantado 110mm", preco: 25.00, cat: "Acessório", img: "img/disco.jpg" },
    { id: 112, nome: "Prumo de Parede", preco: 14.50, cat: "Medição", img: "img/prumo.jpg" },
    { id: 113, nome: "Broca Vídea 8mm", preco: 8.00, cat: "Acessório", img: "img/broca.jpg" },
    { id: 114, nome: "Alicate Universal 8\"", preco: 38.00, cat: "Manual", img: "img/alicate.jpg" },
    { id: 115, nome: "Chave de Fenda Kit 6pçs", preco: 55.00, cat: "Manual", img: "img/chaves.jpg" },
    { id: 116, nome: "Esmirilhadeira Angular", preco: 279.00, cat: "Elétrica", img: "img/esmirilhadeira.jpg" },
    { id: 117, nome: "Linha de Pedreiro 100m", preco: 9.90, cat: "Medição", img: "img/linha.jpg" },
    { id: 118, nome: "Carrinho de Mão 45L", preco: 149.00, cat: "Transporte", img: "img/carrinho_mao.jpg" },
    { id: 119, nome: "Lixadeira Orbital", preco: 210.00, cat: "Elétrica", img: "img/lixadeira.jpg" },
    { id: 120, nome: "Pá Quadrada com Cabo", preco: 52.00, cat: "Manual", img: "img/pa.jpg" }
];

let carrinho = [];

function renderizarProdutos() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = produtos.map(p => `
        <div class="product-card">
            <div class="product-image">
                <img src="${p.img}" alt="" onerror="this.style.display='none'">
            </div>
            <div class="product-info">
                <p class="category">${p.cat}</p>
                <h3>${p.nome}</h3>
                <span class="price">R$ ${p.preco.toFixed(2).replace('.', ',')}</span>
                <button class="btn-add" onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
            </div>
        </div>
    `).join('');
}

function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    document.getElementById('cartCount').innerText = carrinho.length;
    mostrarToast(produto.nome);
}

function mostrarToast(nome) {
    const toast = document.getElementById("toast");
    toast.innerText = `${nome} adicionado! 🛠️`;
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

document.getElementById('cartBtn').onclick = () => document.getElementById('cartModal').style.display = "block";
document.getElementById('closeCart').onclick = () => document.getElementById('cartModal').style.display = "none";

renderizarProdutos();