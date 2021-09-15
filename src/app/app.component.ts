import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nesteddemo';
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  gotonested() {
    this.router.navigate(['/nested'], { queryParams: { username: 'jay solanki' } });

    let navigationExtras: NavigationExtras = {
      queryParams: {
        name: 'jay solanki'
      }
    };
    this.router.navigate(['nested'], navigationExtras);
  }
}
