import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shoppinglist.service";

@Component({
    selector: 'app-shoppinglist',
    templateUrl: './shoppinglist.component.html'
})
export class ShoppingListComponent implements OnInit{
    ingredients: Ingredient[];

    constructor(private shoppinglistService: ShoppingListService){};

    ngOnInit() {
        //get the ingredients from the service then replace with subsequent, changed arrays
        this.ingredients = this.shoppinglistService.getIngredients();

        this.shoppinglistService.ingredientsChange.subscribe(
            (ingredientsEdit: Ingredient[]) => {
                this.ingredients = ingredientsEdit;
            }
        )
    }
}