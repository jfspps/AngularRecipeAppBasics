import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    // inform the shoppingListService of the new array of ingredients
    ingredientsChange = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Potatoes', 11)
    ];

    addIngredient(newIngredient: Ingredient){
        // push to the copy of the array then emit new array to ingredientsChange
        this.ingredients.push(newIngredient);
        this.ingredientsChange.emit(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}