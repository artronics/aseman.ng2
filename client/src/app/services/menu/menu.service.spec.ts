/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MenuService } from './menu.service';

describe('Menu Service', () => {
  beforeEachProviders(() => [MenuService]);

  it('should ...',
      inject([MenuService], (service: MenuService) => {
    expect(service).toBeTruthy();
  }));
  
});
