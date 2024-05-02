import { Component, inject } from '@angular/core';
import { GameOfLifeService } from '../../game-of-life.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  service = inject(GameOfLifeService);
  seedQuantity: number = 50;
  gridHeight: number = 8;
  gridWeight: number = 8;


  beginGame(): void {
    this.service.runLifeCycle();
  }

  reset(): void {
    this.service.reset();
  }

  onChanges(): void {
    this.service.updateSettings([this.seedQuantity, this.gridHeight, this.gridWeight]);
  }
}
