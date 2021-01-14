import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    // this adds to a copy of ingredients array
    this.shoppingListService.addIngredient(new Ingredient(
      this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value));
  }
}
