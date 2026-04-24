const products = [
    // TECNOLOGIA
    { id: 1, name: "Smartwatch Elite", price: 25000, desc: "Pantalla AMOLED y sensor salud.", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", category: "tecnologia" },
    { id: 2, name: "Auriculares Pro", price: 18000, desc: "Cancelación de ruido activa.", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", category: "tecnologia" },
    { id: 3, name: "Cámara Vintage", price: 45000, desc: "Fotografía analógica 35mm.", img: "https://images.unsplash.com/photo-1526170315870-ef0d97f66422?w=400", category: "tecnologia" },
    { id: 4, name: "Mouse Gamer Gold", price: 8500, desc: "RGB personalizable 12800 DPI.", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400", category: "tecnologia" },
    { id: 5, name: "Teclado Mecánico", price: 22000, desc: "Switches Brown táctiles.", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400", category: "tecnologia" },
    { id: 6, name: "Tablet Ultra", price: 85000, desc: "Ideal para diseño y oficina.", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400", category: "tecnologia" },
    { id: 7, name: "Speaker Bluetooth", price: 12500, desc: "Sonido 360 grados waterproof.", img: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=400", category: "tecnologia" },
    { id: 8, name: "Power Bank Pro", price: 9800, desc: "Carga rápida 20000mAh.", img: "https://images.unsplash.com/photo-1609091839311-d536819bc1b8?w=400", category: "tecnologia" },

    // HOGAR
    { id: 9, name: "Difusor Aromas", price: 11000, desc: "Humidificador con luces LED.", img: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=400", category: "hogar" },
    { id: 10, name: "Lámpara Nórdica", price: 15400, desc: "Diseño minimalista madera.", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", category: "hogar" },
    { id: 11, name: "Set de Tazas", price: 6500, desc: "Cerámica artesanal grafito.", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400", category: "hogar" },
    { id: 12, name: "Planta Decorativa", price: 4200, desc: "Maceta diseño con base.", img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400", category: "hogar" },
    { id: 13, name: "Espejo Circular", price: 19800, desc: "Borde dorado premium.", img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400", category: "hogar" },
    { id: 14, name: "Vela Aromática", price: 3500, desc: "Fragancia sándalo natural.", img: "https://images.unsplash.com/photo-1602810316693-3667c854239a?w=400", category: "hogar" },
    { id: 15, name: "Almohadón Soft", price: 5800, desc: "Terciopelo alta densidad.", img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400", category: "hogar" },
    { id: 16, name: "Cafetera Prensa", price: 14000, desc: "Acero inoxidable y vidrio.", img: "https://images.unsplash.com/photo-1544787210-2827448b326c?w=400", category: "hogar" },

    // BELLEZA
    { id: 17, name: "Perfume Gold", price: 32000, desc: "Notas intensas amaderadas.", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400", category: "belleza" },
    { id: 18, name: "Sérum Facial", price: 9500, desc: "Hidratación Vitamina C.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400", category: "belleza" },
    { id: 19, name: "Labial Matte", price: 4800, desc: "Larga duración rojo carmín.", img: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?w=400", category: "belleza" },
    { id: 20, name: "Brochas Premium", price: 12400, desc: "Set x10 pelo sintético.", img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400", category: "belleza" },
    { id: 21, name: "Rodillo Jade", price: 5600, desc: "Masajeador facial relax.", img: "https://images.unsplash.com/photo-1619451422370-e819ad52a451?w=400", category: "belleza" },
    { id: 22, name: "Secador Iónico", price: 28500, desc: "Secado rápido sin daño.", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400", category: "belleza" },
    { id: 23, name: "Paleta Sombras", price: 14200, desc: "Tonos tierra y metal.", img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400", category: "belleza" },
    { id: 24, name: "Esmalte Luxury", price: 2800, desc: "Brillo extremo secado pro.", img: "https://images.unsplash.com/photo-1630750306103-1113d173ad39?w=400", category: "belleza" },

    // ACCESORIOS
    { id: 25, name: "Reloj Black", price: 38000, desc: "Analógico cuero genuino.", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400", category: "accesorios" },
    { id: 26, name: "Billetera Slim", price: 11500, desc: "Cuero con protección RFID.", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", category: "accesorios" },
    { id: 27, name: "Lentes Aviador", price: 14800, desc: "Polarizados filtro UV400.", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", category: "accesorios" },
    { id: 28, name: "Mochila Urban", price: 24500, desc: "Porta notebook y USB.", img: "https://images.unsplash.com/photo-1553062407-98eeb94c6a62?w=400", category: "accesorios" },
    { id: 29, name: "Cinturón Classic", price: 7200, desc: "Hebilla metal reforzado.", img: "https://images.unsplash.com/photo-1614165933396-44449830722d?w=400", category: "accesorios" },
    { id: 30, name: "Bolso de Viaje", price: 42000, desc: "Lona impermeable premium.", img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400", category: "accesorios" },
    { id: 31, name: "Llavero Luxury", price: 3500, desc: "Detalle metal y cuero.", img: "https://images.unsplash.com/photo-1582131507295-098592cb33df?w=400", category: "accesorios" },
    { id: 32, name: "Gorra Black", price: 6800, desc: "Minimalista bordado pro.", img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400", category: "accesorios" }
];

let cart = [];
let subtotal = 0;
const COSTO_ENVIO = 2500;
const CUOTAS = 3;
const RECARGO_CUOTAS = 0.15;

function renderProducts(filter = 'todos') {
    const grid = document.getElementById('grid');
    if (!grid) return;
    grid.innerHTML = "";
    const filtered = filter === 'todos' ? products : products.filter(p => p.category === filter);
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/000000/d4af37?text=PATRIC+SOFT'">
            <div class="card-info">
                <div>
                    <h3>${p.name}</h3>
                    <p>${p.desc}</p>
                </div>
                <div>
                    <span class="price-tag">$${p.price}</span>
                    <button class="btn-add" onclick="addItem('${p.name}', ${p.price})">AÑADIR</button>
                </div>
            </div>`;
        grid.appendChild(card);
    });
}

function filterProducts(category, e) {
    document.querySelectorAll('.btn-cat').forEach(btn => btn.classList.remove('active'));
    e.currentTarget.classList.add('active');
    renderProducts(category);
}

function addItem(name, price) {
    cart.push({ name, price });
    subtotal += price;
    updateUI();
}

function updateUI() {
    const bar = document.getElementById('cart-bar');
    const count = document.getElementById('cart-count');
    const totalDisplay = document.getElementById('cart-total-display');
    if (cart.length > 0) {
        bar.style.display = 'flex';
        count.innerText = cart.length;
        const totalBase = subtotal + COSTO_ENVIO;
        const totalCuotas = totalBase * (1 + RECARGO_CUOTAS);
        const valorCuota = (totalCuotas / CUOTAS).toFixed(0);
        totalDisplay.innerHTML = `
            <div class="price-container-cart">
                <span class="total-price">Contado: $${totalBase}</span>
                <span class="cuotas-price">${CUOTAS} cuotas de $${valorCuota}</span>
            </div>`;
    } else { bar.style.display = 'none'; }
}

function clearCart() {
    if (confirm("¿Vaciar carrito?")) { cart = []; subtotal = 0; updateUI(); }
}

function sendOrder() {
    const nombre = document.getElementById('user-name').value.trim();
    const direccion = document.getElementById('user-address').value.trim();
    if (!nombre || !direccion) { alert("Completa tus datos."); return; }

    const totalContado = subtotal + COSTO_ENVIO;
    const totalCuotas = totalContado * (1 + RECARGO_CUOTAS);
    const valorCuota = (totalCuotas / CUOTAS).toFixed(0);
    const seña = (totalContado * 0.5).toFixed(0);

    let msg = `🛍️ *NUEVO PEDIDO | MIL COSAS ! ®*\n`;
    msg += `------------------------------------------\n`;
    msg += `👤 *Cliente:* ${nombre}\n`;
    msg += `📍 *Entrega:* ${direccion}\n`;
    msg += `------------------------------------------\n`;
    msg += `📝 *DETALLE:* \n`;
    cart.forEach(i => msg += `• ${i.name} ($${i.price})\n`);
    msg += `\n📦 *Envío:* $${COSTO_ENVIO}\n`;
    msg += `💰 *TOTAL CONTADO:* $${totalContado}\n`;
    msg += `------------------------------------------\n`;
    msg += `💳 *PLAN DE PAGOS (15% interés):* \n`;
    msg += `✨ *Total Financiado:* $${totalCuotas.toFixed(0)}\n`;
    msg += `📊 *Cuotas:* ${CUOTAS} de *$${valorCuota}*\n`;
    msg += `------------------------------------------\n`;
    msg += `📌 *PASOS PARA ADQUIRIRLO:* \n`;
    msg += `💵 Seña para reserva: *$${seña}*\n`;
    msg += `📥 O abono de la 1° cuota.\n`;
    msg += `------------------------------------------\n`;
    msg += `⚠️ _Envía el comprobante para procesar tu pedido._`;

    // NÚMERO DE LA CLIENTA PARA PEDIDOS
    const telCliente = "54926244562";
    window.open(`https://wa.me/${telCliente}?text=${encodeURIComponent(msg)}`);
}

window.addEventListener('DOMContentLoaded', () => renderProducts());
