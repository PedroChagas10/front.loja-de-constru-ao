const produtos = [
    { id: 201, nome: "Vergalhão CA-50 8.0mm 3/8", preco: 48.90, cat: "Aço", Image: "VERGALHAO 8M" },
    { id: 202, nome: "Vergalhão CA-50 10.0mm", preco: 62.00, cat: "Aço", img: "img/vergalhao10.jpg" },
    { id: 203, nome: "Coluna Pronta 7x14 6m", preco: 89.00, cat: "Armação", img: "img/coluna.jpg" },
    { id: 204, nome: "Treliça H12 6m", preco: 55.00, cat: "Armação", img: "img/trelica.jpg" },
    { id: 205, nome: "Malha Pop 2x3m", preco: 78.00, cat: "Armação", img: "img/malha.jpg" },
    { id: 206, nome: "Arame Recozido 1kg", preco: 22.50, cat: "Acessório", img: "img/arame.jpg" },
    { id: 207, nome: "Prego com Cabeça 17x21 (1kg)", preco: 18.90, cat: "Acessório", img: "img/prego.jpg" },
    { id: 208, nome: "Bloco de Concreto Estrutural", preco: 4.50, cat: "Blocos", img: "img/bloco_est.jpg" },
    { id: 209, nome: "Viga U de Aço", preco: 120.00, cat: "Perfil", img: "img/viga_u.jpg" },
    { id: 210, nome: "Sapata Pronta 60x60", preco: 45.00, cat: "Armação", img: "img/sapata.jpg" },
    { id: 211, nome: "Estribo 7x17 (50un)", preco: 35.00, cat: "Acessório", img: "img/estribo.jpg" },
    { id: 212, nome: "Espaçador de Ferragem", preco: 0.50, cat: "Acessório", img: "img/espacador.jpg" },
    { id: 213, nome: "Perfil Estrutural Galvanizado", preco: 95.00, cat: "Perfil", img: "img/perfil.jpg" },
    { id: 214, nome: "Cimento Estrutural 50kg", preco: 39.90, cat: "Insumo", img: "img/cimento_est.jpg" },
    { id: 215, nome: "Aditivo para Concreto 1L", preco: 25.00, cat: "Insumo", img: "img/aditivo.jpg" },
    { id: 216, nome: "Canaleta Estrutural", preco: 5.20, cat: "Blocos", img: "img/canaleta_est.jpg" },
    { id: 217, nome: "Cordoalha de Aço", preco: 15.00, cat: "Aço", img: "img/cordoalha.jpg" },
    { id: 218, nome: "Painel Treliçado", preco: 65.00, cat: "Armação", img: "img/painel.jpg" },
    { id: 219, nome: "Graute Estrutural 20kg", preco: 32.00, cat: "Insumo", img: "img/graute_est.jpg" },
    { id: 220, nome: "Tela de Amarração", preco: 12.00, cat: "Armação", img: "img/tela.jpg" }
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
    toast.innerText = `${nome} adicionado! 🏗️`;
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

document.getElementById('cartBtn').onclick = () => document.getElementById('cartModal').style.display = "block";
document.getElementById('closeCart').onclick = () => document.getElementById('cartModal').style.display = "none";

renderizarProdutos();
