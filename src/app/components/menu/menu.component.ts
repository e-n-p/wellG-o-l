import { Component, inject } from '@angular/core';
import { GameOfLifeService } from '../../game-of-life.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  service = inject(GameOfLifeService);

  beginGame(){

  }
}
