import { Component, OnInit } from '@angular/core';
import {PropertyBindingComponent} from './property-binding.component';

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives: [PropertyBindingComponent]
})
export class DatabindingComponent implements OnInit {
  title = 'ololt';
  error = false;
  person = {
    id: 1,
    name: 'Alex',
  }
  constructor() { }

  ngOnInit() {
  }

  toggleError() {
    this.error = !this.error;
  }

  hasError() {
    return this.error;
  }

  clickChild(value){
    alert('Clicked ' + value);
  }

}
