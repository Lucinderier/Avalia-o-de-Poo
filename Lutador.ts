import {Equipamento} from "./Equipamento";

class Lutador {
    hp: number;
    mp: number;
    ataqueL: number;
    defesaL: number;
    equipamentos: Object[]
    
    constructor(hp: number, mp: number, ataqueL:number, defesaL: number) {
        this.hp = hp;
        this.mp = mp;
        this.ataqueL = ataqueL;
        this.defesaL = defesaL
    }
    
    equiparEquipamento(){
        let minhaEscolha = Number(prompt("Número do equipamento: "))
        if (minhaEscolha == 1) {
             this.equipamentos.push(capacete);
        }
        if (minhaEscolha == 2){
             this.equipamentos.push(armadura);
        }
        if (minhaEscolha == 3) {
             this.equipamentos.push(espada);
        }
    }

    exibirInformaçõesLutador() {
        console.log("HP: ", this.hp);
        console.log("MP: ", this.mp);
        console.log("Ataque: ", this.ataqueL);
        console.log("Defesa: ", this.defesaL);
        console.log("Equipamentos: ", this.equipamentos);
    }

    ataqueTotal(): number {
        const ataqueTotal = this.ataqueL + this.equipamentos[1][2] + this.equipamentos[2][2] + this.equipamentos[3][2];
        return ataqueTotal;
    }

    defesaTotal(): number {
        const defesaTotal = this.defesaL + this.equipamentos[1][3] + this.equipamentos[2][3] + this.equipamentos[3][3];
        return defesaTotal;
    }

    ataque() {
        console.log(`Seu ataque é ${this.ataqueTotal} de ataque`);
    }

    ataqueEspecial() {
        const ataqueEsp =+ this.ataqueTotal/2;
        if (this.mp > this.mp * 0.2){
            console.log(`Seu dano é de ${ataqueEsp} de ataques causados`);
            this.mp =- this.mp * 0.2;
            console.log(`MP restante: ${this.mp}`)
        }
        if (this.mp < this.mp * 0.2){
            console.log("MP insuficiente")
        }
    }

    receberDano(danoRecebido: number){ 
        if (danoRecebido > this.defesaL) {
            this.hp = (this.hp + this.defesaL) - danoRecebido;
             this.hp
        }
        if (this.hp <= 0) {
            console.log("Seu lutador foi massacrado");
             this.hp
        }
        console.log(`O HP do lutador é ${this.hp}`)
    }

    atacar() {
        console.log(`Seu Lutador da um golpe causando ${this.ataqueTotal} em seu ataque ataque`);
    }

    defender() {
        console.log(`Seu Lutador se protege com ${this.defesaTotal} de defesa`);
    }

    tomarPocaoHP(){
         this.hp = this.hp * 0.25
    }

    tomarPocaoMP(){
         this.mp = this.mp * 0.25
    }
}

const capacete = new Equipamento("Capacete", 0, 10);
const armadura = new Equipamento("Armadura", 5, 20);
const espada = new Equipamento("Espada", 20, 0);