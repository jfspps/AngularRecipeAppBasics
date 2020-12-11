import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { RecipeitemComponent } from './recipebook/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipebook/recipedetail/recipedetail.component';
import { ShoppingListComponent } from './shoppinglist/shoppinglist/shoppinglist.component';
import { RecipeList } from './recipebook/recipelist/recipelist.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppinglisteditComponent,
    RecipeList,
    RecipeitemComponent,
    RecipedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
