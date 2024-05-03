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
    this.updateObservable();
  }

  getGrid$(): Observable<number[][]> {
    return this.gridView$;
  }

  printGrid(): number[][] {
    return this.grid.getGridRepresentation();
  }

  updateObservable(): void {
    this.gridView$.next(this.printGrid());
  }

  toggle(x: number, y: number): void {
    this.grid.toggle(x, y);
    this.updateObservable();
  }


  runLifeCycle(): void {
    this.grid.stepLifeCycle();
    this.updateObservable();
  }

  reset(): void {
    this.grid.resetGrid();
    this.updateObservable();
  }

  updateSettings(changeArray: number[]): void {
    this.grid.seedAmount = changeArray[0];
    this.grid.width = changeArray[1];
    this.grid.height = changeArray[2];

    this.grid.resetGrid();
    this.updateObservable();
  }

}
