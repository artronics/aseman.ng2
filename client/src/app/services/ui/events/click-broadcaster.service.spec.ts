import { beforeEachProviders, it, describe, expect, inject } from "@angular/core/testing";
import { ClickBroadcasterService } from "./click-broadcaster.service";

describe('ClickBroadcaster Service', () => {
  beforeEachProviders(() => [ClickBroadcasterService]);

  it('should ...',
      inject([ClickBroadcasterService], (service: ClickBroadcasterService) => {
    expect(service).toBeTruthy();
  }));
});
