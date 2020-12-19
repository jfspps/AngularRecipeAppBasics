import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: 'app-shoppinglist',
    templateUrl: './shoppinglist.component.html'
})
export class ShoppingListComponent{
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Potatoes', 11)
    ];

    constructor(){};

    addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
    }
}