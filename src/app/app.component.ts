import { Component } from '@angular/core';
import { RequestService } from 'src/app/request.service';
import { recipe } from './models/recipe';
import { State } from './state.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Transportadora de medicamentos';
  StatePoint = State;
  StateCarga = State;
  prescription: recipe[] = []


  recipeState: recipe[] = [
    { id: 0, State: 1 }, // esta en el punto A = 1 o punto B = 0
    { id: 1, State: 0 } // esta cargado = 1 o no tiene cacrga = 0
];
constructor(
  //private api: RequestService,
) { 
  setInterval(() => {
    //this.getSensor()
    console.log(1)
   }, 1000); 
}

  get state(): State {
    return this.StatePoint.On
  }
  /*
  public getSensor(): void {
    this.api.getSensor().subscribe((response: any) => {
      console.log(response);
      console.log("get sensor");
      this.prescription = response
    });
  }*/


}


