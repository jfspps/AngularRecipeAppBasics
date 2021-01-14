import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shoppinglist/shoppinglist.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  // there are multiple ways of passing ingredients list from the current recipe
  ingredientsToList(){
    // add to the copy (republishing is handled by the service; this would perform multiple emit() calls which isn't optimal)

    // this.recipe.ingredients.forEach(ingredient => {
    //   this.shoppingListService.addIngredient(ingredient);
    // });

    // add the array ion one go
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
