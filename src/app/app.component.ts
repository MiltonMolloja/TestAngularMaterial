import { Component } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
export let toaster: ToasterService;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-frontend';
  config: ToasterConfig = new ToasterConfig({ animation: 'fade' });
  constructor(
    private toasterService: ToasterService,
      ) {
          toaster = toasterService;
      }
}
