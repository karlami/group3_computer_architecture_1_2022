import { Component } from '@angular/core';
import { recipe } from './models/recipe';
import { State } from './state.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Transportadora de medicalmentos';
  StatePoint = State;
  StateCarga = State;


  recipeState: recipe[] = [
    { id: 0, State: 1 }, // esta en el punto A = 1 o punto B = 0
    { id: 1, State: 0 } // esta cargado = 1 o no tiene cacrga = 0
];
  get state(): State {
    return this.StatePoint.On
  
  }


}


