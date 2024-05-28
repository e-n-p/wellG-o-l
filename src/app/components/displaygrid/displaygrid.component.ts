import { Component, inject } from '@angular/core';
import { GameOfLifeService } from '../../shared/game-of-life.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-displaygrid',
  templateUrl: './displaygrid.component.html',
  styleUrl: './displaygrid.component.css'
})
export class DisplayGridComponent {

  gameService = inject(GameOfLifeService);
  gridRepresentation$: Observable<number[][]> = this.gameService.getGrid$();
  heatGrid: Observable<number[][]> = this.gameService.getHeatMap$();

  toggleCell(x:number, y:number): void {
    this.gameService.toggle(x, y);
  }

}
