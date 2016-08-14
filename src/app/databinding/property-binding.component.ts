import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-property-binding',
  template: `
    {{id}}

    <button (click)="clickButton()">Click me!</button>
  `,
  styles: []
})
export class PropertyBindingComponent implements OnInit {
  @Input() id: number = 0;
  @Output() clickedCallback = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickButton() {
    this.clickedCallback.emit(this.id);
  }
}
