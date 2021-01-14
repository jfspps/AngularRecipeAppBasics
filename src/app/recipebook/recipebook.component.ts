import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipes.service";

@Component({
    selector: 'app-recipebook',
    templateUrl: './recipebook.component.html',
    providers: [RecipeService]
})
export class RecipeBook{

    selectedRecipe: Recipe;
}