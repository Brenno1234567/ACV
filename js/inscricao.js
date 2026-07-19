// Adicione isso logo na primeira linha do arquivo, fora do addEventListener
console.log("O script de inscrição carregou!"); 

document.getElementById('formInscricao').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Adicione isso aqui dentro
    console.log("Botão de enviar clicado!"); 

    const btn = e.target.querySelector('button');
    btn.innerText = "Enviando...";
    
    // ... resto do seu código ...
});
document.getElementById('formInscricao').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.innerText = "Enviando...";

    const dados = {
        nome: document.getElementById('nome').value,
        whatsapp: document.getElementById('whatsapp').value,
        sexo: document.getElementById('sexo').value,
        idade: document.getElementById('idade').value,
        tribo: document.getElementById('tribo').value,
        cidade: document.getElementById('cidade').value,
        dataNasc: document.getElementById('dataNasc').value,
        emergencia: document.getElementById('emergencia').value,
        transporte: document.getElementById('transporte').checked,
        pagamento: document.getElementById('pagamento').checked
    };

    const res = await fetch('/api/inscricao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    });

    const result = await res.json();
    document.getElementById('statusMensagem').innerText = result.mensagem;
    btn.innerText = "Enviar Inscrição";
});