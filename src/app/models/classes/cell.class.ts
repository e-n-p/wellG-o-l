export class Cell {
    
    //cell change operations here, more complex things well fleshed out.
    //comparisons? 
    constructor(
        private value:number
    ) {}

    getValue():number {
        return this.value;
    }
    setValue(newNum:number):void {
        this.value = newNum;
    }
}