import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shoppinglist/shoppinglist.component'
import { RecipeItemComponent as RecipeItemComponent } from './recipebook/recipelist/recipeitem/recipeitem.component';
import { RecipeDetailComponent } from './recipebook/recipedetail/recipedetail.component';
import { RecipeList } from './recipebook/recipelist/recipelist.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBook } from './recipebook/recipebook.component';
import { ShoppingListEditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeBook,
    RecipeList,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
