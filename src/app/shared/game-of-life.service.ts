import { Injectable } from '@angular/core';
import { Grid } from '../models/classes/grid.class';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {

  private grid: Grid = new Grid(8, 8);
  breakerSubject = new Subject<void>();
  private gridView$ = new BehaviorSubject<number[][]>(this.grid.getGridRepresentation());

  constructor() {
    this.updateObservable();
  }

  public getGrid$(): Observable<number[][]> {
    return this.gridView$;
  }

  private printGrid(): number[][] {
    return this.grid.getGridRepresentation();
  }

  private updateObservable(): void {
    this.gridView$.next(this.printGrid());
  }

  public toggle(x: number, y: number): void {
    this.grid.toggle(x, y);
    this.updateObservable();
  }

  public runALifeCycle(): void {
    this.grid.stepLifeCycle();
    this.updateObservable();
  }

  public runCompleteLifeCycle$(): Observable<void> {
      let isCompleted = false;
      let lastGridState: number[][] = [];
      let counter: number = 0;

      const updateAndCheckIfComplete = () => {
        this.grid.stepLifeCycle();
        this.updateObservable();
        let newGridState = this.printGrid();
        if (counter != 0 && this.areGridsMatching(lastGridState, newGridState)) {
          isCompleted = true;
        }
        counter++;
        lastGridState = structuredClone(newGridState);
      }

      return new Observable<void>(obs => {
        const intervalId = setInterval(() => {
          updateAndCheckIfComplete();
          if (isCompleted) {
            console.log("in breaker");
            clearInterval(intervalId);
            obs.next();
            obs.complete();
          }
        }, 1000);
        this.breakerSubject.subscribe(() => {
          clearInterval(intervalId);
          obs.next();
          obs.complete();
      });
      })
  }

  private areGridsMatching(oldGrid: number[][], newGrid: number[][]): boolean {
    for (let i = 0; i < this.grid.height; i++) {
      for (let j = 0; j < this.grid.width; j++) {
        if (oldGrid[i][j] != newGrid[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  public reset(): void {
    this.breakerSubject.next();
    this.grid.resetGrid();
    this.updateObservable();
  }

  public updateSettings(changeArray: number[]): void {
    this.grid.seedAmount = changeArray[0];
    this.grid.height = changeArray[1];
    this.grid.width = changeArray[2];

    this.grid.resetGrid();
    this.updateObservable();
  }

}