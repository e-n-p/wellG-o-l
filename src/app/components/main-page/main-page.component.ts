import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  seedQuant:number = 0;

  passSeedQuantity(quantity: number){
    this.seedQuant = quantity;
  }
}
