import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipes.service";

@Component({
    selector: 'app-recipebook',
    templateUrl: './recipebook.component.html',
    providers: [RecipeService]
})
export class RecipeBook implements OnInit{

    constructor(private recipeService: RecipeService) {}

    selectedRecipe: Recipe;

    ngOnInit() {
        // assign this selectedRecipe to whatever is chosen in recipeService
        this.recipeService.selectedRecipe.subscribe(
            (recipe: Recipe) => {
                this.selectedRecipe = recipe;
            }
        )
    }
}