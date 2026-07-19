document.addEventListener('DOMContentLoaded', function() {

    // ================= 1. CONFIGURAÇÃO DO CRONÔMETRO =================
    const dataDoEvento = "2027-07-12"; 
    const dataLimite = new Date(`${dataDoEvento}T00:00:00`).getTime();

    const atualizarCronometro = () => {
        const diasEl = document.getElementById('dias');
        const horasEl = document.getElementById('horas');
        const minutosEl = document.getElementById('minutos');
        const segundosEl = document.getElementById('segundos');

        if (!diasEl || !horasEl || !minutosEl || !segundosEl) return;

        const agora = new Date().getTime();
        const diferenca = dataLimite - agora;

        if (diferenca < 0) {
            diasEl.innerText = '00';
            horasEl.innerText = '00';
            minutosEl.innerText = '00';
            segundosEl.innerText = '00';
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        diasEl.innerText = String(dias).padStart(2, '0');
        diasEl.innerText = String(dias).padStart(2, '0');
        horasEl.innerText = String(horas).padStart(2, '0');
        minutosEl.innerText = String(minutos).padStart(2, '0');
        segundosEl.innerText = String(segundos).padStart(2, '0');
    };

    if (document.getElementById('dias')) {
        atualizarCronometro();
        setInterval(atualizarCronometro, 1000);
    }

    // ================= 2. LÓGICA DO SUBMENU "QUEM SOMOS" =================
    const btnQuemSomos = document.getElementById('btnQuemSomos');
    const submenuQuemSomos = document.getElementById('submenuQuemSomos');

    if (btnQuemSomos && submenuQuemSomos) {
        btnQuemSomos.addEventListener('click', function(e) {
            e.preventDefault();
            submenuQuemSomos.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
            if (!btnQuemSomos.contains(e.target) && !submenuQuemSomos.contains(e.target)) {
                submenuQuemSomos.classList.remove('show');
            }
        });
    }

    // ================= 3. SISTEMA DE FILTROS DA GALERIA =================
    const botoesFiltro = document.querySelectorAll('.btn-filtro');
    const cardsGaleria = document.querySelectorAll('.galeria-card');

    if (botoesFiltro.length > 0 && cardsGaleria.length > 0) {
        botoesFiltro.forEach(botao => {
            botao.addEventListener('click', () => {
                botoesFiltro.forEach(b => b.classList.remove('active'));
                botao.classList.add('active');

                const categoriaSelecionada = botao.getAttribute('data-filter');

                cardsGaleria.forEach(card => {
                    const categoriaCard = card.getAttribute('data-category');

                    if (categoriaSelecionada === 'todos' || categoriaCard === categoriaSelecionada) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.4s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ================= 4. JAVASCRIPT DO PREVIEW DA IMAGEM =================
    const modal = document.getElementById('preview-modal');
    
    // Só roda o modal se o elemento existir na página
    if (modal) {
        const imgModal = document.getElementById('img-preview');
        const modalWrapper = document.getElementById('modal-wrapper');
        const botaoFechar = document.getElementById('modal-close-btn');

        // Abre o modal ao clicar em qualquer card da galeria
        cardsGaleria.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('.card-img');
                if (img && imgModal) {
                    modal.style.display = "block";
                    imgModal.src = img.src;
                    document.body.style.overflow = "hidden";
                }
            });
        });

        // Função para fechar o Modal
        function fecharModal() {
            modal.style.display = "none";
            if (imgModal) imgModal.src = "";
            document.body.style.overflow = "auto";
        }

        // Fecha ao clicar no X
        if (botaoFechar) {
            botaoFechar.addEventListener('click', fecharModal);
        }

        // Fecha ao clicar fora da imagem
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target === modalWrapper) {
                fecharModal();
            }
        });

        // Fecha com tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                fecharModal();
            }
        });
    }
});