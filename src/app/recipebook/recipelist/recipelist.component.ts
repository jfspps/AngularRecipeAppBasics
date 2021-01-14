import { Component, OnInit} from "@angular/core";
import { RecipeService } from "src/app/recipebook/recipes.service";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipelist',
    templateUrl: './recipelist.component.html'
})
export class RecipeList implements OnInit {

    recipes: Recipe[];   // see recipe.model.ts for definition and recipes.service.ts for data

    constructor(private recipeService: RecipeService){
    }

    ngOnInit(){
        this.recipes = this.recipeService.getRecipes();
    }
}