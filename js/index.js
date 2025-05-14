const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path:'./.env'});

const app = express();
app.use(express.json())
app.use(express.static('public'));

app.post('/enviar-email', async(req, res) =>{
    const dados = req.body;

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }

    });

    const html = `
    <h2>Novo cadastro de equipamento</h2>
    <p><strong>Proprietário:</strong> ${dados.proprietario}</p>
    <p><strong>Equipamento:</strong> ${dados.equipamento}</p>
    <p><strong>Data de entrada:</strong> ${dados.dataEntrada}</p>
    <p><strong>Defeito:</strong> ${dados.defeito}</p>
    <p><strong>Previsão de entrega:</strong> ${dados.previsaoEntrega}</p>
    <p><strong>Status:</strong> ${dados.status}</p>
    <p><strong>Observações:</strong> ${dados.observacoesProduto}</p>
  `;

  try{
      await transport.sendMail({
          from: `Cadastro de equipamento <${process.env.EMAIL}>`,
          to: process.env.EMAIL_ENVIO,
          subject: 'E-mail de teste para subir nova alteracao ',
          html,
          text: 'E-mail enviado com sucesso!',
  });

res.send('E-mail enviado com sucesso!');
} catch(err){
    console.error(err);
   res.status(500).send('Erro ao enviar e-mail');
}
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));