import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  details: Ingredient;
  constructor() { }
  @Output() itemDetails = new EventEmitter<Ingredient>();
  ngOnInit() {
  }
  listAdd(name: string, amount: number) {
    this.itemDetails.emit(new Ingredient(name , amount));

  }
}
