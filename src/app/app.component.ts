import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private route: Router) {
  }
  ngOnInit() {
    this.route.navigateByUrl("home");
  }

  navigateToPost() {
    this.route.navigateByUrl("postTrips");
  }
  navigateToSearch() {
    this.route.navigateByUrl("searchTrips");
  }
  navigateToContact() {
    this.route.navigateByUrl("contact");
  }
  navigateToHome() {
    this.route.navigateByUrl("home");
  }
}