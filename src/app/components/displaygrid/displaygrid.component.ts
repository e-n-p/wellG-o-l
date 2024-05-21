import { Component, inject } from '@angular/core';
import { GameOfLifeService } from '../../shared/game-of-life.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-displaygrid',
  templateUrl: './displaygrid.component.html',
  styleUrl: './displaygrid.component.css'
})
export class DisplayGridComponent {

  gridService = inject(GameOfLifeService);

  gridRepresentation$: Observable<number[][]> = this.gridService.getGrid$();

  toggleCell(x:number, y:number): void {
    this.gridService.toggle(x, y);
  }

}
