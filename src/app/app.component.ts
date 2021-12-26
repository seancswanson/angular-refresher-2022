import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  detailsDisplayed = false;
  buttonLog = [];

  constructor() {}

  public toggleDetailDisplay() {
    const timestamp = Date.now();

    this.detailsDisplayed = !this.detailsDisplayed;

    this.buttonLog.push(timestamp);
  }
}
