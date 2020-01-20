import { Component, OnInit } from '@angular/core';
import { Recipe } from './movie.model';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }
  imagepath: string = "https://i1.wp.com/cdn.inc42.com/wp-content/uploads/2017/10/bookmyshow-flipkart-ecommerce-online-ticketing.jpg?resize=632%2C474&ssl=1";
  ngOnInit() {
  }

}
