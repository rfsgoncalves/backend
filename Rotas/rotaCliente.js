//Rota é uma micro aplicação express que se encarrega de processar
//requisições em um determinado endpoint
//Por exemplo: http://localhost:3000/cliente  <-- cliente é um endpoint
//            domínio da aplicação   endpoint 

import { Router } from 'express';
import ClienteCtrl from '../Controles/clienteCtrl.js';

const rotaCliente = new Router();
const cliCtrl = new ClienteCtrl();

rotaCliente
.get('/', cliCtrl.consultar)
.get('/:termo', cliCtrl.consultar)  //atribuindo a função consultar como parâmetro do que executar quando receber um método get na rota
.post('/', cliCtrl.gravar)
.put('/:codigo', cliCtrl.atualizar)
.patch('/:codigo', cliCtrl.atualizar)
.delete('/:codigo', cliCtrl.excluir);


export default rotaCliente;