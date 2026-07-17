// ================= CONFIGURAÇÃO DA DATA =================
// DIGITE APENAS A DATA AQUI! (Formato: ANO-MÊS-DIA)
const dataDoEvento = "2027-07-12"; 
// ========================================================

// O próprio código se vira e junta a sua data com o início do dia (00:00:00)
const dataLimite = new Date(`${dataDoEvento}T00:00:00`).getTime();

const atualizarCronometro = () => {
    const agora = new Date().getTime();
    const diferenca = dataLimite - agora;

    // Se a data já passou, zera o cronômetro
    if (diferenca < 0) {
        document.getElementById('dias').innerText = '00';
        document.getElementById('horas').innerText = '00';
        document.getElementById('minutos').innerText = '00';
        document.getElementById('segundos').innerText = '00';
        clearInterval(intervalo);
        return;
    }

    // O código calculando tudo sozinho pra você não esquentar a cabeça:
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Cospe os valores formatados na tela
    document.getElementById('dias').innerText = String(dias).padStart(2, '0');
    document.getElementById('horas').innerText = String(horas).padStart(2, '0');
    document.getElementById('minutos').innerText = String(minutos).padStart(2, '0');
    document.getElementById('segundos').innerText = String(segundos).padStart(2, '0');
};

// Inicializa e roda segundo a segundo
atualizarCronometro();
const intervalo = setInterval(atualizarCronometro, 1000);