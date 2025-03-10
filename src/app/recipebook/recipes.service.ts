import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{

    // assigned by emit(recipeName) from a given component (i.e. recipeItem)
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'test recipe name', 
            'some description', 
            'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
            [
                new Ingredient('Chicken', 1)
            ]),
        new Recipe(
            'test recipe name #2',
            'some description', 
            'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Onion', 2)
            ])
    ];   // see recipe.model.ts for definition
    
    getRecipes(){
        //return a copy of recipes (recipes is private and not accessible outside this class)
        return this.recipes.slice();
    }
}