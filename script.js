const card = document.querySelector('.card');
const btnPerfil = document.getElementById('perfil');
const btnVoltar = document.getElementById('voltar');

if (btnPerfil && card) {
    btnPerfil.addEventListener('click', () => {
        card.classList.add('flipped');
    });
}

if (btnVoltar && card) {
    btnVoltar.addEventListener('click', () => {
        card.classList.remove('flipped');
    });
}

