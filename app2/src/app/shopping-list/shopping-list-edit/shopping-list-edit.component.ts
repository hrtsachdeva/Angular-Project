import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shoppinglist.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  details: Ingredient;
  constructor(private shoppinglistservice: ShoppingListService) { }
  @Output() itemDetails = new EventEmitter<Ingredient>();
  @ViewChild('f') form_ele: NgForm;
  ngOnInit() {
  }

  listAdd(form: NgForm) {

    this.shoppinglistservice.addIngredient(new Ingredient(form.value.name , form.value.amount));
  }

  clear() {
    this.form_ele.reset();
  }
}
