export class Cliente {
    nome: string
    documento: number
    senha: string

    constructor(nome: string, documento: number, senha: string) {
        this.nome = nome
        this.documento = documento
        this.senha = senha
    }
}