/*
4. [0,5 pts] Cria a classe Equipamento.
a. Todo equipamento tem um nome e os atributos: aumento de ataque e aumento de defesa;
b. No Anexo I tem uma lista de equipamentos que você pode usar como exemplo, mas você pode criar outros.
*/

export class Equipamento {
    nome: string;
    aumentoAtaque: number;
    aumentoDefesa: number;

    constructor(nome: string, aumentoAtaque: number, aumentoDefesa: number) {
        this.nome = nome;
        this.aumentoAtaque = aumentoAtaque;
        this.aumentoDefesa = aumentoDefesa;
    }
}