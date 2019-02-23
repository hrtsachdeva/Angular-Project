import { Ingredient } from './ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
  listRefresh = new EventEmitter<Ingredient[]>();
  startedEditing = new EventEmitter<number>();
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
    }

  }
  getIngredientByIndex(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number , ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.listRefresh.emit(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index , 1);
    this.listRefresh.emit(this.ingredients.slice());
  }

}
