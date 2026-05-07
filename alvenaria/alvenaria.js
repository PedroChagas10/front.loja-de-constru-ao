const produtos = [
    { id: 1, nome: "Bloco Cerâmico 9x19x19", preco: 1.45, cat: "Vedação", img: "img/bloco_ceramico.jpg" },
    { id: 2, nome: "Tijolo Baiano 8 Furos", preco: 1.20, cat: "Vedação", img: "img/tijolo_baiano.jpg" },
    { id: 3, nome: "Tijolo Maciço Comum", preco: 0.85, cat: "Estrutural", img: "img/tijolo_macico.jpg" },
    { id: 4, nome: "Tijolo Refratário", preco: 4.50, cat: "Churrasqueira", img: "img/refratario.jpg" },
    { id: 5, nome: "Bloco de Concreto", preco: 3.90, cat: "Estrutural", img: "img/bloco_concreto.jpg" },
    { id: 6, nome: "Bloco de Vidro", preco: 18.90, cat: "Decoração", img: "img/bloco_vidro.jpg" },
    { id: 7, nome: "Cobogó de Cimento", preco: 12.50, cat: "Ventilação", img: "img/cobogo.jpg" },
    { id: 8, nome: "Cimento CP-II 50kg", preco: 34.90, cat: "Insumo", img: "img/cimento.jpg" },
    { id: 9, nome: "Argamassa AC-I 20kg", preco: 11.50, cat: "Assentamento", img: "img/argamassa.jpg" },
    { id: 10, nome: "Areia Fina (Saco 20kg)", preco: 6.00, cat: "Insumo", img: "img/areia.jpg" },
    { id: 11, nome: "Pedra Brita nº 1", preco: 7.50, cat: "Insumo", img: "img/brita.jpg" },
    { id: 12, nome: "Vergalhão 3/8", preco: 45.00, cat: "Estrutural", img: "img/vergalhao.jpg" },
    { id: 13, nome: "Cal Hidratada 20kg", preco: 14.00, cat: "Insumo", img: "img/cal.jpg" },
    { id: 14, nome: "Tijolo Ecológico", preco: 2.10, cat: "Sustentável", img: "img/ecologico.jpg" },
    { id: 15, nome: "Canaleta de Concreto", preco: 4.20, cat: "Estrutural", img: "img/canaleta.jpg" },
    { id: 16, nome: "Meio Bloco", preco: 2.50, cat: "Estrutural", img: "img/meio_bloco.jpg" },
    { id: 17, nome: "Bloco Celular", preco: 9.80, cat: "Térmico", img: "img/celular.jpg" },
    { id: 18, nome: "Tijolo Laminado", preco: 1.95, cat: "Acabamento", img: "img/laminado.jpg" },
    { id: 19, nome: "Graute 20kg", preco: 28.00, cat: "Insumo", img: "img/graute.jpg" },
    { id: 20, nome: "Impermeabilizante 1L", preco: 15.00, cat: "Insumo", img: "img/impermeabilizante.jpg" }
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
    toast.innerText = `${nome} adicionado! 🧱`;
    toast.className = "toast show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

document.getElementById('cartBtn').onclick = () => document.getElementById('cartModal').style.display = "block";
document.getElementById('closeCart').onclick = () => document.getElementById('cartModal').style.display = "none";

renderizarProdutos();