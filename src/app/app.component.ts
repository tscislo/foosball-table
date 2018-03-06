import { Component } from '@angular/core';

@Component({
  selector: 'foosball-root',
  template: `
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'foosball';
}
