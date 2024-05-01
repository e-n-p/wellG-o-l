import { Injectable } from '@angular/core';
import { Grid } from './models/classes/grid.class';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {

  grid: Grid = new Grid(8, 8);
  gridDimension = 8;

  private gridView$ = new BehaviorSubject<number[][]>(this.grid.getGridRepresentation());

  constructor() {
    // this.runLifeCycle();
  }


  printGrid(): number[][] {
    return this.grid.getGridRepresentation();
  }

  // runLifeCycle(): Observable<number[][]> {

  //   return
  // }

}
