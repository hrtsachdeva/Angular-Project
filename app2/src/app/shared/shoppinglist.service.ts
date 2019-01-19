import { Ingredient } from './ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
  listRefresh = new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[] = [
    new Ingredient('apple', 5 ) ,
    new Ingredient('mango', 10)
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.listRefresh.emit(this.ingredients.slice());
  }
  addIngredientarray(ingre: Ingredient[]) {
    for (const item of ingre) {
      this.ingredients.push(item);
      alert(item.name);
    }

  }
}
