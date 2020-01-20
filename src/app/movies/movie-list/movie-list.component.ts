import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Recipe } from '../movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('MarJaavan', 'Movies', 'https://image3.mouthshut.com/images/imagesp/925916758s.png'),
    new Recipe('Stree', 'Movies', 'https://image3.mouthshut.com/images/imagesp/925916758s.png'),
    new Recipe('Havfaith', 'Collections', 'https://image3.mouthshut.com/images/imagesp/925916758s.png'),
    new Recipe('Head out to Explore', 'Events', 'https://image3.mouthshut.com/images/imagesp/925916758s.png'),
    new Recipe('MarJaavan', 'Movies', 'https://image3.mouthshut.com/images/imagesp/925916758s.png'),
    new Recipe('Stree', 'Movies', 'https://image3.mouthshut.com/images/imagesp/925916758s.png'),
    new Recipe('Havfaith', 'Collections', 'https://image3.mouthshut.com/images/imagesp/925916758s.png'),
    new Recipe('Head out to Explore', 'Events', 'https://image3.mouthshut.com/images/imagesp/925916758s.png')
  ];

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
   }

   onClickMe() {
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 1000);
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
