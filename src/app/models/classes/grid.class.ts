import { Cell } from "./cell.class"

export class Grid {

    private grid!: Cell[][];
    seedAmount: number = 50;
    //grid search and print operations in here
    constructor(private width: number, private height: number) {
        this.createGrid(height, width)
        this.seedGrid(this.seedAmount);
    }

    private createGrid(height: number, width: number): void {
        const outerArray = new Array(height);
        for (let i = 0; i < height; i++) {
            outerArray[i] = [];
            for (let j = 0; j < width; j++) {
                outerArray[i][j] = new Cell();
            }
        }
        this.grid = outerArray;
    }

    public resetGrid(){
        this.createGrid(this.height, this.width);
        this.seedGrid(this.seedAmount);
    }

    public getGridRepresentation(): number[][] {
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
            let randHeight = Math.floor(Math.random() * this.height);
            let randWidth = Math.floor(Math.random() * this.width);
            this.grid[randHeight][randWidth].seed();
        }
    }

    private getNeighbourAmount(x:number, y:number): number{
        const neighbourCells: [number, number][] = [
            [x-1, y-1],
            [x-1, y],
            [x-1, y+1],

            [x, y-1],
            [x, y+1],

            [x+1, y-1],
            [x+1, y],
            [x+1, y+1],
        ];
        let count:number = 0;
        for (const [neighbourX, neighbourY] of neighbourCells){
            if (
                (neighbourX < 0 || neighbourX >= this.height) || 
                (neighbourY < 0 || neighbourY >= this.width)) {
                continue
            }
            console.log(neighbourX + "-" + neighbourY);
            if (this.grid[neighbourX][neighbourY].isAlive()){
                count++;
            }
        }
        return count
    }

    public stepOneLifeCycle(){
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let neighbours = this.getNeighbourAmount(i,j);
                if (neighbours < 2 || neighbours > 3){
                    this.grid[i][j].kill();
                } else if (this.grid[i][j].isAlive() && neighbours === 3) {
                    this.grid[i][j].seed();
                }
            }
        }
    }

}