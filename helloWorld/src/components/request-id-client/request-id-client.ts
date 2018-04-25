import { Component } from '@angular/core';
import { InfoClientComponent } from '../info-client/info-client';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the RequestIdClientComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'request-id-client',
  templateUrl: 'request-id-client.html'
})
export class RequestIdClientComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello RequestIdClientComponent Component');
    this.text = 'Hello World';
  }

  pushPage(){
    this.navCtrl.push(InfoClientComponent)
  }

}
