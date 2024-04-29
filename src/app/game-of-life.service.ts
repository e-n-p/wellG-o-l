import { Injectable } from '@angular/core';
import { Grid } from './models/classes/grid.class';

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {

  grid:Grid;
  gridDimension = 8;

  constructor() {
    this.grid = new Grid(8,8);
  }


  printGrid(): number[][]{
    return this.grid.getGridRepresentation();
  }

}
