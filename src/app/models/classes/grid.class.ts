import { Cell } from "./cell.class"

export class GridContainer {

    grid: number[][]
    //grid search and print operations in here
    constructor(width:number, height:number) {
        this.grid = new Array(height).fill(false).map(() => new Array(width).fill(new Cell(0)));
    }

    getGridRepresentation(){

    }


}