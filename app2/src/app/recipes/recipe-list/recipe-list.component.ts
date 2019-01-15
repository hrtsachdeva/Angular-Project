import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a Test Recipe', 'https://bit.ly/2TJIzUP') ,
    new Recipe('Test2 Recipe', 'This is a Test2 Recipe', 'https://bit.ly/2CZ5rtG')
  ];
  constructor() { }
  @Output() recipeDetails = new EventEmitter<Recipe>();
  ngOnInit() {
  }
  selectedRecipeIndex(detail: Recipe) {
    this.recipeDetails.emit(detail);
  }

}
