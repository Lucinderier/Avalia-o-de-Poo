import { Menu } from "./Menu";

export class itemMenu { //Criação da classe itemMenu com os seguintes atributos (Item A, Item B)
    opcao: string;
    textoDaOpcao: string;
    constructor(opcao: string, textoDaOpcao: string) { //Constructor pra agilizar a criação de objetos
        this.opcao = opcao; //Definindo o que a designação do atributo significa
        this.textoDaOpcao = textoDaOpcao; //Definindo o que a designação do atributo significa
    }
}

//Criação de um objeto com o constructor. Sua ordem dentro dos parênteses representam os respectivos atributos constituídos acima (Item F)
const atacar = new itemMenu("1", "Atacar");
const ataqueEspecial = new itemMenu("2", "Ataque especial");
const tomarPocaoCuraHP = new itemMenu("3", "Tomar poção de Cura de HP");
const tomarPocalRestauraMP = new itemMenu("4", "Tomar poção que Restaura MP");
const defender = new itemMenu("5", "Defender");

//Adicionando os objetos recém-criados "ao arrayDeItens" do "Menu"
Menu[1].push(atacar)
Menu[1].push(ataqueEspecial)
Menu[1].push(tomarPocaoCuraHP)
Menu[1].push(tomarPocalRestauraMP)
Menu[1].push(defender)