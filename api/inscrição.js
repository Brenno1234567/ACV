module.exports = (req, res) => {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método inválido' });

    const { nome, whatsapp, sexo, idade, tribo, cidade, dataNasc, emergencia } = req.body;

    // Aqui você pode integrar com um banco de dados (MongoDB/Supabase) ou enviar um e-mail
    console.log("Nova Inscrição:", { nome, whatsapp, idade, tribo });

    res.status(200).json({ 
        sucesso: true, 
        mensagem: `Parabéns ${nome}, sua inscrição foi recebida com sucesso!` 
    });
};