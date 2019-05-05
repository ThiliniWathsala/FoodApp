import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
   new Recipe('pasta','check pasta','https://thecozycook.com/wp-content/uploads/2016/02/Chicken-Bacon-Spinach-Pasta-Recipe-700x982.jpg'),
   new Recipe('pasta','check pasta','https://thecozycook.com/wp-content/uploads/2016/02/Chicken-Bacon-Spinach-Pasta-Recipe-700x982.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
