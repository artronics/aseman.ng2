export class AsemanPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aseman-app h1')).getText();
  }
}
