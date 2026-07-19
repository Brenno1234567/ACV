const { createClient } = require('@supabase/supabase-js');

// Inicializa o cliente do Supabase usando as chaves que configuramos na Vercel
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Apenas métodos POST são permitidos" });
    }

    try {
        const dados = req.body;

        // Insere os dados na tabela 'inscricoes'
        const { data, error } = await supabase
            .from('inscricoes')
            .insert([dados]);

        if (error) {
            console.error("Erro ao salvar no Supabase:", error);
            return res.status(500).json({ error: "Erro ao salvar no banco de dados", details: error });
        }

        console.log("Sucesso! Dados salvos:", data);
        return res.status(200).json({ mensagem: "Inscrição realizada com sucesso!" });

    } catch (err) {
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};