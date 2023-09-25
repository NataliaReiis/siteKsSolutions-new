const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.Port || 3001;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('enviar-mensagem', async (req, res) => {
    try{
        const {nome, email, mensagem } = req.body;
        
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'nataliareis208@gmail.com',
                pass: 'hwyayh1337@=E',
            },
        });

        const mailOptions = {
            from: 'nataliareis208@gmail.com',
            to: 'nataliareis208@gmail.com',
            subject: 'Mensagem do Site',
            text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Mensagem enviada:', info.response);
        res.status(200).json({sucess: 'Mensagem enviada com sucesso. '});
    } catch (error) {
        console.log('Erro ao enviar o email: ', error);
        res.status(500).json({error: 'Ocorreu um erro ao enviar a mensagem. '})
    }
});

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});