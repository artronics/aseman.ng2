/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MenubarService } from './menubar.service';

describe('Menubar Service', () => {
  beforeEachProviders(() => [MenubarService]);

  it('should ...',
      inject([MenubarService], (service: MenubarService) => {
    expect(service).toBeTruthy();
  }));
});
