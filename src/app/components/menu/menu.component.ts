import { Component, inject } from '@angular/core';
import { GameOfLifeService } from '../../shared/game-of-life.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public seedQuantity: number = 50;
  public gridHeight: number = 8;
  public gridWidth: number = 8;
  public updateSpeed: number = 1;
  private service = inject(GameOfLifeService);


  stepLifeCycle(): void {
    this.service.runALifeCycle();
  }

  runLifeCycle(): void {
    this.service.runCompleteLifeCycle$().subscribe();

  }

  showHeatMapGrid() {
    this.service.triggerHeatMap();
  }

  reset(): void {
    this.service.reset();
  }

  onChanges(): void {
    this.service.updateSettings([
      this.seedQuantity,
      this.gridHeight,
      this.gridWidth,
      this.updateSpeed
    ]);
  }

  halt(): void {
    this.service.halt();
  }

}
