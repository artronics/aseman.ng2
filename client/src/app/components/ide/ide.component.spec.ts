/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { IdeComponent } from './ide.component';
import { MenubarService } from "../../services/menu/menubar.service";

describe('Component: Ide', () => {
  it('should create an instance', () => {
    let component = new IdeComponent(new MenubarService());
    expect(component).toBeTruthy();
  });
});
