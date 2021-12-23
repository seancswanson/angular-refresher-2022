import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  username: string;

  constructor() {
    this.username = 'usernameExample';
  }
  public resetUsername() {
    this.username = '';
    console.log('resetUsername()');
  }
}
