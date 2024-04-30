import { Cell } from "./cell.class"

export class Grid {

    private grid!: Cell[][];
    //grid search and print operations in here
    constructor(private width: number, private height: number) {
        this.createGrid(height, width)
        this.seedGrid(10);
    }

    createGrid(height: number, width: number) {
        const outerArray = new Array(height);
        for (let i = 0; i < height; i++) {
            outerArray[i] = [];
            for (let j = 0; j < width; j++) {
                outerArray[i][j] = new Cell();
            }
        }
        this.grid = outerArray;
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