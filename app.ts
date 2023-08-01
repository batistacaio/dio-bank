import { Cliente } from "./class/Cliente";
import { Conta } from "./class/Conta";
import { ContaCorrente } from "./class/ContaCorrente";
import { ContaPoupanca } from "./class/ContaPoupanca";

const clienteCaio: Cliente = new Cliente("Caio Batista", 394435232, "123556")
const clienteLucas: Cliente = new Cliente("Lucas Batista", 38437239, "123556")

const contaCaio: ContaCorrente = new ContaCorrente(clienteCaio)
const contaLucas: ContaPoupanca = new ContaPoupanca(clienteLucas)

contaCaio.getSaldo()
contaLucas.getSaldo()
contaCaio.depositar(1000)
contaCaio.transferir(contaLucas, 500)
contaLucas.getSaldo()

contaLucas.sacar(2000)
contaCaio.getLoan(1000)
contaCaio.getSaldo()
contaLucas.depositoEspecial(200)
contaLucas.getSaldo()