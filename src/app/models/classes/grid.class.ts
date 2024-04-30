import { Cell } from "./cell.class"

export class Grid {

    private grid: Cell[][];
    //grid search and print operations in here
    constructor(private width: number, private height: number) {
        this.grid = new Array(height).fill(false).map(() => new Array(width).fill(new Cell(0)));
        this.seedGrid(1);
    }

    getGridRepresentation() {
        const printedGrid: number[][] = Array(this.height).fill(false).map(() => new Array(this.width).fill(false));
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                printedGrid[i][j] = this.grid[i][j].getValue();
            }
        }
        return printedGrid;
    }

    seedGrid(amount: number): void {
        for (let i = 0; i < amount; i++) {
            let ranHeight = Math.floor(Math.random() * this.height);
            let ranWidth = Math.floor(Math.random() * this.height);
            console.log(ranHeight + " - " + ranWidth);
            this.grid[ranHeight][ranWidth].seed();
        }
    }


}