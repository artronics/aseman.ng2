/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MenubarComponent } from './menubar.component';

describe('Component: Menubar', () => {
  it('should create an instance', () => {
    let component = new MenubarComponent();
    expect(component).toBeTruthy();
  });
});
