import { Component } from "@angular/core";

@Component({
    selector: 'app-recipelist',
    templateUrl: './recipelist.component.html'
})
export class RecipeList {
    recipes = [];   // see recipe.model.ts for definition

}