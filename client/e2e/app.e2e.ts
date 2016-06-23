import { AsemanPage } from './app.po';

describe('aseman App', function() {
  let page: AsemanPage;

  beforeEach(() => {
    page = new AsemanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('aseman works!');
  });
});
