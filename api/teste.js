// api/test.js
module.exports = (req, res) => {
  const { name = 'Visitante' } = req.query;
  
  res.status(200).json({ 
    mensagem: `Olá ${name}! Este é o seu back-end na Vercel funcionando.`,
    data: new Date()
  });
};