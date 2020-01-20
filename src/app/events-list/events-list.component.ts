import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  imagepath:string = "https://www.opengroup.org/sites/default/files/styles/no_style/public/events-image_4.jpg?itok=4WXOWjGa";
  ngOnInit() {
  }
  onClickMe() {
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 1000);
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
