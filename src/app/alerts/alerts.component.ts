import { Component, Input, OnInit } from '@angular/core';
import { AlertType } from './alert-type';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent implements OnInit {
  @Input() alertType: AlertType;

  constructor() {}

  ngOnInit(): void {
    console.log(this.alertType);
  }
}
