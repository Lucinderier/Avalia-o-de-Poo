import { itemMenu } from "./ItemMenu"; //Importando o objeto "itemMenu" do arquivo "ItemMenu.ts"

export class Menu { //Criando a classe Menu (item 1)

    arrayDeItens: itemMenu[]; //Criação do atributo sendo itemMenu como array (Item C)

    imprimirMenu(){ //Criando o método imprimirMenu (item D)
        this.arrayDeItens.forEach((element) => console.log(`${element[1]} - ${element[2]}`)); //Formato pedido no exemplo (Item F)
        let minhaOpcao = prompt("Em meio ao confronto, um menu abre para você\nDigite o número que represente sua ação: "); //Com o prompt, o usuário deverá escolher sua ação (Item E)
        console.log(`Você escolhe a opção número ${minhaOpcao} para lidar com a situação.`); //Exibe ao usuário a sua escolha
        return minhaOpcao; //Retorna a constante "minhaOpcao" para uso futuro (Item E)
    }
}