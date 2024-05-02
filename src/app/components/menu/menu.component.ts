import { Component, EventEmitter, Output, inject } from '@angular/core';
import { GameOfLifeService } from '../../game-of-life.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  service = inject(GameOfLifeService);
  // seedQuantity:number = 50;
  @Output()
  seedQuantity: EventEmitter<number> = new EventEmitter<number>();

  beginGame(): void{
    this.service.runLifeCycle();
  }

  reset(): void{
    this.service.reset();
  }
}
