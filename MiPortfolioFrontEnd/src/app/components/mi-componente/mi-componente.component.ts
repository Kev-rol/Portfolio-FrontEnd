import { Component } from "@angular/core";


@Component({
    selector: 'mi-componente',
    template: `
               <h1> Hola mundo, soy Mi Componente</h1>
               <p>Este es mi primer componente</p>
               `
    
    
})
export class Micomponente{

    constructor(){
        console.log("Componente mi-componente cargado!!");
    }
}