import { Component, inject } from '@angular/core';
import { GameOfLifeService } from '../../shared/game-of-life.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  service = inject(GameOfLifeService);
  seedQuantity: number = 50;
  gridHeight: number = 8;
  gridWidth: number = 8;


  stepLifeCycle(): void {
    this.service.runALifeCycle();
  }

  runLifeCycle(): void {
    this.service.runCompleteLifeCycle$().subscribe();
  }

  reset(): void {
    this.service.reset();
  }

  onChanges(): void {
    this.service.updateSettings([this.seedQuantity, this.gridHeight, this.gridWidth]);
  }
}
