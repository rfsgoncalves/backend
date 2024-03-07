import express from "express";
import rotaCliente from "./Rotas/rotaCliente.js";

const host = '0.0.0.0'; //IP genérico que representa todas as interfaces (placas de rede)
const porta = 3000; //Sempre utilize portas com valor maior que 1024

const app = express();
app.use(express.json()); //configurando o express para saber interpretar o formato JSON
app.use(express.urlencoded({ extended: true })); //configurando o express para saber interpretar o formato URL utilizando a biblioteca QueryString
//app.use('/caminho', rotaCaminho);
app.use('/clientes',rotaCliente);
//app.use('/produtos', rotaProduto);  //Exemplo de como uma aplicação pode ter mais de uma rota ou endpoint
app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});


