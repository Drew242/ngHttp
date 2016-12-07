import { NgHTTPPage } from './app.po';

describe('ng-http App', function() {
  let page: NgHTTPPage;

  beforeEach(() => {
    page = new NgHTTPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
