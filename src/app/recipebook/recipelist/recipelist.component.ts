import { Component, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipelist',
    templateUrl: './recipelist.component.html'
})
export class RecipeList {

    @Output() recipeSelection = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('test recipe name', 'some description', 
        'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
        new Recipe('test recipe name #2', 'some description', 
        'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/master/pass/Basically-Gojuchang-Chicken-Recipe-Wide.jpg')
    ];   // see recipe.model.ts for definition

    onRecipeSelected(recipe: Recipe){
        this.recipeSelection.emit(recipe);
    }
}