import { Injectable } from '@angular/core';
import { Cell } from './models/classes/cell.class';

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {

  grid:number[][] = [[]];
  gridDimension = 8;
  constructor() {
    this.grid = new Array(this.gridDimension).fill(false).map(() => new Array(this.gridDimension).fill(new Cell(0)));
   }


}
