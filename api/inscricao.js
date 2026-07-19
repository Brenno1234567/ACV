module.exports = (req, res) => {
    // Log para confirmar que a função foi chamada
    console.log(">>> [LOG] A função foi acessada!");
    console.log(">>> [LOG] Método recebido:", req.method);
    console.log(">>> [LOG] Corpo (body) recebido:", req.body);

    if (req.method === 'POST') {
        return res.status(200).json({ 
            sucesso: true, 
            mensagem: "Backend recebeu os dados!" 
        });
    }

    return res.status(405).json({ error: "Apenas métodos POST são permitidos" });
};