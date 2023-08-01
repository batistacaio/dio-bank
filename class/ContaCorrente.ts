import { Conta } from "./Conta"

export class ContaCorrente extends Conta {
    getSaldo(): void {
        console.log("Conta selecionada: CORRENTE")
        super.getSaldo()
    }

    getLoan(valor: number): void {
        this.depositar(valor)
        console.log("Foi depositado o empréstimo no valor de %d em sua conta!", valor)
    }
}