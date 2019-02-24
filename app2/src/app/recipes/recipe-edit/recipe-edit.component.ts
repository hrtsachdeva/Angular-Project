import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private recipeservice: RecipeService , private route: ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
      this.id = +params['id'] ;
      this.editMode = params['id'] != null;
      this.initForm();
      }
    );
  }
  onCancle() {
  this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['desc'],
      this.recipeForm.value['imgurl'],
      this.recipeForm.value['ingredients']
      );
    if (this.editMode) {
      this.recipeservice.updateRecipe(this.id, newRecipe);
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.recipeservice.addRecipe(newRecipe);
      this.router.navigate(['../'], {relativeTo: this.route});
    }
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)] )
      })
    );
  }

  initForm() {
    let recipemane = '';
    let recipeimg = '';
    let recipedesc = '';
    const recipeingredient = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeservice.getRecipeByIndex(this.id);
      recipemane = recipe.name;
      recipeimg  = recipe.imagePath;
      recipedesc = recipe.description;
      if (recipe['ingredient']) {
          for (const ingredient of recipe.ingredient) {
            recipeingredient.push(
              new FormGroup({
                'name': new FormControl(ingredient.name, Validators.required),
                'amount': new FormControl(ingredient.amount, [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
              })
            );
          }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipemane, Validators.required),
      'imgurl': new FormControl(recipeimg, Validators.required),
      'desc': new FormControl(recipedesc, Validators.required),
      'ingredients': recipeingredient
    });
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

}
