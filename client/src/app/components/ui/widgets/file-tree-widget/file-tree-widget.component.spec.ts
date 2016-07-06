/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FileTreeWidgetComponent } from './file-tree-widget.component';

describe('Component: FileTreeWidget', () => {
  it('should create an instance', () => {
    let component = new FileTreeWidgetComponent();
    expect(component).toBeTruthy();
  });
});
