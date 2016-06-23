import { beforeEachProviders, describe, expect, it, inject } from "@angular/core/testing";
import { AsemanAppComponent } from "../app/aseman.component";

beforeEachProviders(() => [AsemanAppComponent]);

describe('App: Aseman', () => {
  it('should create the app',
      inject([AsemanAppComponent], (app: AsemanAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'aseman works!\'',
      inject([AsemanAppComponent], (app: AsemanAppComponent) => {
    expect(app.title).toEqual('Aseman Ide');
  }));
});
