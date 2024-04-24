import { Component, inject } from '@angular/core';
import { GameOfLifeService } from '../game-of-life.service';
import { Cell } from '../models/classes/cell.class';

@Component({
  selector: 'app-displaygrid',
  templateUrl: './displaygrid.component.html',
  styleUrl: './displaygrid.component.css'
})
export class DisplaygridComponent {

  gridService = inject(GameOfLifeService);
  grid: number[][] = this.gridService.grid;
  constructor(){
    console.log(this.gridService.grid);
  }


}
