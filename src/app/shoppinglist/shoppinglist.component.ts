import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shoppinglist.service";

@Component({
    selector: 'app-shoppinglist',
    templateUrl: './shoppinglist.component.html',
    providers: [ShoppingListService]
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