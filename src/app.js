const express = require('express');
const path = require('path');
const app  = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.post('/registrar', (req,res) => {
    console.log('dados recebidos:', req.body);
    const {nome, email, telefone, idade, mensagem} = req.body;
    registerHooks.push({nome, email, telefone, idade, mensagem});
    res.redirect("/lista");
});

app.listen(port, () => {
    console.log("servidor rodando em http://localhost:${PORT}");
});