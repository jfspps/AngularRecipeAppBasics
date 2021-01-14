import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Potatoes', 11)
    ];

    addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}