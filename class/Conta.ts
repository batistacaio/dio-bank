import { Cliente } from "./Cliente"

export abstract class Conta {
    private static sequencial = 1
    private agencia: number
    private numero: number
    private saldo: number = 0
    private cliente: Cliente

    constructor(cliente: Cliente) {
        this.cliente = cliente
        this.numero = Conta.sequencial++
        this.agencia = 1
    }

    getSaldo(): void {
        console.log("[Usuário: %s] O saldo desta conta é: %d", this.cliente.nome, this.saldo)
    }

    depositar(valor: number) {
        this.saldo += valor
        console.log("[Usuário: %s] Foi depositado o valor: %d", this.cliente.nome, valor)
    }

    sacar(valor: number) {
        if (this.saldo >= valor) {
            this.saldo -= valor
            console.log("[Usuário: %s] Foi sacado o valor: %d", this.cliente.nome, valor)
        } else {
            console.log("Saldo insuficiente.")
        }
    }

    transferir(contaDestino: Conta, valor: number) {
        if (this.saldo >= valor) {
            this.saldo -= valor
            contaDestino.saldo += valor
            console.log("[Usuário: %s] Foi depositado o valor %d na conta de destino.", this.cliente.nome, valor)
        } else {
            console.log("Saldo insuficiente.")
        }
    }
}