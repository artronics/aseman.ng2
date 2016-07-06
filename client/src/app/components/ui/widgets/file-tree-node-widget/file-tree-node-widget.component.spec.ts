/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { FileTreeNodeWidgetComponent } from './file-tree-node-widget.component';

describe('Component: FileTreeNodeWidget', () => {
  it('should create an instance', () => {
    let component = new FileTreeNodeWidgetComponent();
    expect(component).toBeTruthy();
  });
});
