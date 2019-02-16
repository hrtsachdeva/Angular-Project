import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeservice: RecipeService,
    private route: Router ,
    private activeRoute: ActivatedRoute
    ) { }
  ngOnInit() {
  this.recipes = this.recipeservice.getRecipes();
  }

  recipeNew() {
  this.route.navigate(['new'] , {relativeTo: this.activeRoute});
  }

}
