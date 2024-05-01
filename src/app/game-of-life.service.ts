import { Injectable } from '@angular/core';
import { Grid } from './models/classes/grid.class';
import { BehaviorSubject, Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {

  grid: Grid = new Grid(8, 8);
  gridDimension = 8;

  private gridView$ = new BehaviorSubject<number[][]>(this.grid.getGridRepresentation());

  constructor() {
    this.gridView$.next(this.printGrid());
  }

  getGrid$(): Observable<number[][]>{
    return this.gridView$;
  }


  printGrid(): number[][] {
    return this.grid.getGridRepresentation();
  }

  runLifeCycle() {
    this.grid.stepOneLifeCycle();
    delay(1000);
    this.gridView$.next(this.grid.getGridRepresentation());
  }

}
