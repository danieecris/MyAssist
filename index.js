const nodemaiiler = require('nodemailer');
const transport = nodemaiiler.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure: false,
    auth:{
        user: 'danielolicristian12@gmail.com',
        pass: 'rbzv zqkm ioww aohb',
    }
    
})

transport.sendMail({
    from: 'Cadastro de equipamento <danielolicristian12@gmail.com',
    to: 'daniel.cristiandeoli@gmail.com',
    subject:'E-mail de teste para '
})