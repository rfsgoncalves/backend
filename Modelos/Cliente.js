//classe é a abstração de uma entidade do mundo real
//Em orientação a objetos uma classe possui métodos e atributos
//atributos são características de um objeto
//metodos são as ações que um objeto pode executar
import ClienteDAO from "../Persistencia/ClienteDAO.js";

export default class Cliente {
    //atributos são privados
    //somente por meio de métodos públicos é que podemos acessar os atributos de uma classe
    //em javascript definimos atributos privados usando #
    #codigo;
    #cpf;
    #nome;
    #endereco;
    #bairro;
    #cidade;
    #estado;
    #telefone;
    #email;

    constructor(codigo=0, cpf="", nome="", endereco="", bairro="", cidade="", estado="", telefone="", email="") {
        this.#codigo = codigo;
        this.#cpf = cpf;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#telefone = telefone;
        this.#email = email;
    }

    //definir os métodos de acesso ao atributos de um cliente
    get codigo(){
        return this.#codigo;
    }    

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }

    get endereco(){
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }

    get bairro(){
        return this.#bairro;
    }

    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }

    get cidade(){
        return this.#cidade;
    }

    set cidade(novaCidade){
        this.#cidade = novaCidade;
    }

    get estado(){
        return this.#estado;
    }

    set estado(novoEstado){
        this.#estado = novoEstado;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }

    get email(){
        return this.#email;
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }

    //como armazenar os clientes no banco de dados?

    async gravar(){
        const dao = new ClienteDAO();
        await dao.gravar(this); //this pode ser compreendido com a seguinte expressão:	"grave a mim mesmo"
    }

    async atualizar(){
        const dao = new ClienteDAO();
        await dao.atualizar(this);
    }

    async excluir(){
        const dao = new ClienteDAO();
        await dao.excluir(this);
    }

    async consultar(termoDePesquisa){
        const dao = new ClienteDAO();
        return await dao.consultar(termoDePesquisa);
    }

    //override do método toString da classe pai Object
    toString(){
        return `Cliente código: ${this.#codigo} -  nome: ${this.#nome}`;
    }

    toJSON(){
        return {
            "codigo": this.#codigo,
            "cpf": this.#cpf,
            "nome": this.#nome,
            "endereco": this.#endereco,
            "bairro": this.#bairro,
            "cidade": this.#cidade,
            "estado": this.#estado,
            "telefone": this.#telefone,
            "email": this.#email
        }
    }
}