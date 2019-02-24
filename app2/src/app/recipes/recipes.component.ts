import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {

  constructor(public recipeservice: RecipeService) { }
  recipevalues: Recipe;
  ngOnInit() {
    this.recipeservice.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipevalues = recipe;
      }
      );
  }
  recipeDetailsCame(details: Recipe) {
    this.recipevalues = details;
  }
}
