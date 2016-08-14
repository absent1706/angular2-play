/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { DatabindingComponent } from './databinding.component';

describe('Component: Databinding', () => {
  it('should create an instance', () => {
    let component = new DatabindingComponent();
    expect(component).toBeTruthy();
  });
});
