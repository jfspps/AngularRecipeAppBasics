import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
    // on click, emit the user selected recipe to RecipeServices' selectRecipe
    // (this is ultimately communicated to recipeBook directly)
    // note how intermediate databinding calls are no longer required
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
