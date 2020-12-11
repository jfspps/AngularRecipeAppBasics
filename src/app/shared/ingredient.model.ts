export class Ingredient{
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }

    // a shorthand form of declaring properties and constructor
    // constructor(public name: string, public amount: number){}
}