import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  // templateUrl: 'app.component.html',
  template: `
  	  <p> {{title}} </p>
	  <app-databinding></app-databinding>
	`,
  styleUrls: ['app.component.css'],
  directives: [DatabindingComponent]
})
export class AppComponent {
  title: string = 'app works gooddd dd!';
}
