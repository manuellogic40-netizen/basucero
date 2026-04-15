// Menú móvil
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        const isVisible = mobileMenu.style.display === 'flex';
        mobileMenu.style.display = isVisible ? 'none' : 'flex';
    });
}

// Cerrar menú al hacer clic en un enlace
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});

// Simulador de puntos
const tipoSelect = document.getElementById('tipoResiduo');
const pesoInput = document.getElementById('pesoKg');
const calcularBtn = document.getElementById('calcularPuntosBtn');
const puntosSpan = document.getElementById('puntosTexto');

// Factor de conversión (puntos por kg según material)
const factores = {
    plastic: 50,    // plástico
    glass: 35,      // vidrio
    metal: 70,      // metal
    cardboard: 25   // cartón
};

function calcularPuntos() {
    let tipo = tipoSelect.value;
    let peso = parseFloat(pesoInput.value);
    
    if (isNaN(peso) || peso <= 0) {
        puntosSpan.textContent = '0 puntos';
        alert('Por favor ingresa un peso válido mayor a 0');
        return;
    }
    
    let factor = factores[tipo] || 0;
    let puntos = Math.floor(peso * factor);
    puntosSpan.textContent = `${puntos} puntos`;
}

calcularBtn.addEventListener('click', calcularPuntos);

// Cálculo inicial al cargar la página
calcularPuntos();

// Scroll suave al botón "Probar simulador"
const scrollBtn = document.getElementById('scrollToSimulador');
if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        document.getElementById('simulador').scrollIntoView({ behavior: 'smooth' });
    });
}