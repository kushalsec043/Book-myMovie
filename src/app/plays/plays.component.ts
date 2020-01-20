import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.css']
})
export class PlaysComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  onClickMe() {
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 1000);
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
