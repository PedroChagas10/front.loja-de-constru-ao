const produtos = [
    { id: 301, nome: "Pedra São Tomé Amarela", preco: 45.00, cat: "Revestimento", img: "img/sao_tome.jpg" },
    { id: 302, nome: "Pedra Miracema Cinza", preco: 38.00, cat: "Piso", img: "img/miracema.jpg" },
    { id: 303, nome: "Pedra Madeira Branca", preco: 72.00, cat: "Revestimento", img: "img/pedra_madeira.jpg" },
    { id: 304, nome: "Filete de Canjiquinha", preco: 85.00, cat: "Decorativo", img: "img/canjiquinha.jpg" },
    { id: 305, nome: "Seixo Rolado Branco 10kg", preco: 42.00, cat: "Jardim", img: "img/seixo.jpg" },
    { id: 306, nome: "Argila Expandida 20L", preco: 28.00, cat: "Jardim", img: "img/argila.jpg" },
    { id: 307, nome: "Pedra Brita Branca nº 1", preco: 35.00, cat: "Decoração", img: "img/brita_branca.jpg" },
    { id: 308, nome: "Ardósia Cinza Polida", preco: 55.00, cat: "Piso", img: "img/ardosia.jpg" },
    { id: 309, nome: "Pedra Ferro (Filetes)", preco: 110.00, cat: "Decorativo", img: "img/pedra_ferro.jpg" },
    { id: 310, nome: "Granito Cinza (M²)", preco: 150.00, cat: "Bancada", img: "img/granito.jpg" },
    { id: 311, nome: "Basalto Preto Irregular", preco: 65.00, cat: "Piso Externo", img: "img/basalto.jpg" },
    { id: 312, nome: "Mármore Branco Comum", preco: 180.00, cat: "Acabamento", img: "img/marmore.jpg" },
    { id: 313, nome: "Pedra Quartzito Rosa", preco: 48.00, cat: "Revestimento", img: "img/quartzito.jpg" },
    { id: 314, nome: "Areia Decorativa Fina", preco: 15.00, cat: "Jardim", img: "img/areia_dec.jpg" },
    { id: 315, nome: "Pedra Moledo (M²)", preco: 95.00, cat: "Muro", img: "img/moledo.jpg" },
    { id: 316, nome: "Pedra Goiás Verde", preco: 52.00, cat: "Piso", img: "img/goias_verde.jpg" },
    { id: 317, nome: "Caco de Mineira Amarela", preco: 25.00, cat: "Piso", img: "img/caco_mineira.jpg" },
    { id: 318, nome: "Lajota de Barro Natural", preco: 40.00, cat: "Rústico", img: "img/lajota.jpg" },
    { id: 319, nome: "Pedra Moledo Natural", preco: 120.00, cat: "Parede", img: "img/moledo_natural.jpg" },
    { id: 320, nome: "Pedra Brita Decorativa Ocre", preco: 39.00, cat: "Jardim", img: "img/brita_ocre.jpg" }
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
    toast.innerText = `${nome} adicionado! 🌿`;
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

document.getElementById('cartBtn').onclick = () => document.getElementById('cartModal').style.display = "block";
document.getElementById('closeCart').onclick = () => document.getElementById('cartModal').style.display = "none";

renderizarProdutos();