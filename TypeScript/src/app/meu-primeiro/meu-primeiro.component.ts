import {component} from '@angular/core';

@Component({
    selector: 'app-meu-primeiro',
    template: ´<h2>Meu Primeiro Componente</h2>´

        <br/> Bem vindo {{ nome }}.
    ,
    styles: ['h2 {background-color: yellow; }']
})

export class MeuPrimeiro{
    nome = 'Alex';

}