export class Monstro { //Criação da classe "monstro" com os seguintes atrbutos (Item 3)
    hp: number; 
    forcaAtaque: number;
    forcaDefesa: number;

    constructor(hp: number, forcaAtaque: number, forcaDefesa: number) { //Constructor pra agilizar a criação de objetos
        this.hp = hp;
        this.forcaAtaque = forcaAtaque;
        this.forcaDefesa = forcaDefesa;
    }

    hpBaixo(danoRecebido, dano) { //Para quando o HP estiver com menos de 20%
        if (this.hp/this.hp < 0.25) { 
            this.forcaAtaque += this.forcaAtaque * 0.1;
            this.forcaDefesa += this.forcaDefesa * 0.3;
            danoRecebido = dano/2
        }
    }

    receberDano(danoSofrido: number){ 
        if (danoSofrido > this.forcaDefesa) {
            this.hp = (this.hp + this.forcaDefesa) - danoSofrido;
            return this.hp
        }
        if (this.hp <= 0) {
            console.log("Monstro derrotado");
            return this.hp
        }
        console.log(`O Monstro está com ${this.hp} de HP`)
    }

    ataque() {
        console.log(`O Monstro de ${this.forcaAtaque} HP`)
        return this.forcaAtaque;
    }
}