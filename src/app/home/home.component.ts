import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { 
     
    }
  book = false;
  ngOnInit() {
  }
  movies() {
    setTimeout(() => {
      this.book = true;
      this.router.navigate(['movies']);
    }, 1000);
      // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }
    events() {
      setTimeout(() => {
        this.book = true;
        this.router.navigate(['events-list']);
      }, 1000);
        // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
      }
      plays() {
        setTimeout(() => {
          this.book = true;
          this.router.navigate(['plays']);
        }, 1000);
          // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
        }
  }

