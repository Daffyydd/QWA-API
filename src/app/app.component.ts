import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  currentUser = 'Admin';

  constructor(
    private router: Router,
   // private authenticationService: AuthenticationService
  ) {
   // this.authenticationService.currentUser.subscribe(
   //   (x) => (this.currentUser = x)
   // );
  }

  get isAdmin() {
    //return this.currentUser && this.currentUser.role === Role.Admin;
    return this.currentUser;
  }
  logout() {
    // this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
