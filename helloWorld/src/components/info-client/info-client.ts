import { Component } from '@angular/core';

/**
 * Generated class for the InfoClientComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'info-client',
  templateUrl: 'info-client.html'
})
export class InfoClientComponent {

  text: string;

  constructor() {
    console.log('Hello InfoClientComponent Component');
    this.text = 'Hello World';
  }

}
