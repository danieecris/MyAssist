const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Carrega as variáveis do .env

const app = express();
const PORT = 3000;

// Middleware para ler JSON do corpo da requisição
app.use(bodyParser.json());

// Rota para receber os dados e enviar o e-mail
app.post('/enviar-email', async (req, res) => {
    const {
        proprietario,
        equipamento,
        dataEntrada,
        defeito,
        previsaoEntrega,
        status,
        observacoesProduto
    } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL_ENVIO,
        subject: 'Novo formulário recebido',
        html: `
            <h2>Dados do formulário:</h2>
            <p><strong>Proprietário:</strong> ${proprietario}</p>
            <p><strong>Equipamento:</strong> ${equipamento}</p>
            <p><strong>Data de Entrada:</strong> ${dataEntrada}</p>
            <p><strong>Defeito:</strong> ${defeito}</p>
            <p><strong>Previsão de Entrega:</strong> ${previsaoEntrega}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Observações:</strong> ${observacoesProduto}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});