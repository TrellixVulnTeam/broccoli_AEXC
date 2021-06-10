import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://img.delicious.com.au/Li2A8QDR/w759-h506-cfill/del/2020/09/silverbeet-fatteh-with-sumac-yoghurt-and-chickpeas-139202-1.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
