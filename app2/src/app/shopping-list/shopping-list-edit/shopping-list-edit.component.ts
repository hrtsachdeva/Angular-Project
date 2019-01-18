import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shoppinglist.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  details: Ingredient;
  constructor(private shoppinglistservice: ShoppingListService) { }
  @Output() itemDetails = new EventEmitter<Ingredient>();
  ngOnInit() {
  }
  listAdd(name: string, amount: number) {
    this.shoppinglistservice.addIngredient(new Ingredient(name , amount));
  }
}
