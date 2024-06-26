export class Cell {

    //cell change operations here, more complex things well fleshed out.
    //comparisons?
    constructor(
        private value: number = 0
    ) { }

    getValue(): number {
        return this.value;
    }
    setValue(newNum: number): void {
        this.value = newNum;
    }
    seed(): void {
        this.value = 1;
    }
    kill():void {
        this.value = 0;
    }
    isAlive(): boolean {
        if (this.value !== 0){
            return true
        } else {
            return false
        }
    }
}