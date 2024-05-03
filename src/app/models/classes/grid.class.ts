import { Cell } from "./cell.class"

export class Grid {

    private grid!: Cell[][];
    seedAmount: number = 50;
    constructor(public width: number, public height: number) {
        this.grid = this.createGrid();
        this.seedGrid(this.seedAmount);
    }

    private createGrid(height: number = this.height, width: number = this.width): Cell[][] {
        const newGrid = new Array(height);
        for (let i = 0; i < height; i++) {
            newGrid[i] = [];
            for (let j = 0; j < width; j++) {
                newGrid[i][j] = new Cell();
            }
        }
        return newGrid
    }

    public resetGrid(): void {
        this.grid = this.createGrid();
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

    public seedGrid(amount: number): void {
        for (let i = 0; i < amount; i++) {
            let randHeight = Math.floor(Math.random() * this.height);
            let randWidth = Math.floor(Math.random() * this.width);
            this.grid[randHeight][randWidth].seed();
        }
    }

    private getNeighbourAmount(x: number, y: number): number {
        const neighbourCells: [number, number][] = [
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],

            [x, y - 1],
            [x, y + 1],

            [x + 1, y - 1],
            [x + 1, y],
            [x + 1, y + 1],
        ];
        let count: number = 0;
        for (const [neighbourX, neighbourY] of neighbourCells) {
            if (
                (neighbourX < 0 || neighbourX >= this.height) ||
                (neighbourY < 0 || neighbourY >= this.width)) {
                continue
            }
            if (this.grid[neighbourX][neighbourY].isAlive()) {
                count++;
            }
        }
        return count
    }

    public stepLifeCycle(): void {
        const newGrid = this.createGrid();
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let neighbours = this.getNeighbourAmount(i, j);
                if (this.grid[i][j].isAlive() && (neighbours < 2 || neighbours > 3)) {
                    newGrid[i][j].kill();
                } else if (this.grid[i][j].isAlive() && (neighbours > 1 && neighbours < 4)) {
                    newGrid[i][j].seed();
                } else if (!this.grid[i][j].isAlive() && neighbours === 3) {
                    newGrid[i][j].seed();
                }
            }
        }
        this.grid = newGrid;
    }

    public toggle(x: number, y: number): void {
        if (this.grid[x][y].isAlive()) {
            this.grid[x][y].kill()
        } else {
            this.grid[x][y].seed()
        }
    }
}