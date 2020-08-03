import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients  : Ingredient[] = [
    new Ingredient('Apples',10),
    new Ingredient('Orange',40)
  ];
  constructor() { }
 
  ngOnInit(): void {
  }

}
