import { Conta } from "./Conta"

export class ContaPoupanca extends Conta {
    getSaldo(): void {
        console.log("Conta selecionada: POUPANÇA");
        super.getSaldo()
    }

    depositoEspecial(valor: number) {
        this.depositar(valor + 10)
        console.log("Foi feito um depósito especial em sua conta no valor de %d e + R$10!", valor)
    }
}